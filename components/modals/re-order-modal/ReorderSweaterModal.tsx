'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ADD_TO_CART_URL, COLOUR_DROPDOWN_URL } from '@/constants/apis';
import { fetchPriceList, getDropdownList, getYarnCardList } from '@/utils/server-api.utils';
import { getAWSImageUrl } from '@/utils/common.utils';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import userAxiosInstance from '@/config/userAxiosInstance';
import { setUserSettingIncreaseCartCount } from '@/lib/redux/slices/userSettingSlice';
import { useRouter } from 'next/navigation';
import { MESSAGES, USER_ROUTES } from '@/constants';
import toast from 'react-hot-toast';

type ReorderSweaterModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onGoToCart: () => void;
    product: any;
};

const genderBasedConfig: Record<string, {
    styleId: string;
    gaugeId: string;
    patternId: string;
}> = {
    '6798793f705aedfe39db13b1': {
        styleId: '6835601871b93cf4de274515', // Men
        gaugeId: '678e68649b451d2d5b771b26',
        patternId: '682632f11df3ffe9dcf68a9b',
    },
    '67987972705aedfe39db13b8': {
        styleId: '683560f971b93cf4de274543', // Women
        gaugeId: '678e68649b451d2d5b771b26',
        patternId: '682553c4fbba7d5cd661eadf',
    },
};


export default function ReorderSweaterModal({
    isOpen,
    onClose,
    product,
}: ReorderSweaterModalProps) {
    const [selectedYarn, setSelectedYarn] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [colours, setColours] = useState<any[]>([]);
    const [yarnList, setYarnList] = useState<any[]>([]);
    const [filterYarnList, setFilterYarnList] = useState<any[]>([]);
    const [price, setPrice] = useState<number | null>(null);

    console.log('Product:', product);
    const genderId = product.product.genderId._id || product.product.genderId;
    const defaultConfig = genderBasedConfig[genderId] || {};
    const router = useRouter();
    useEffect(() => {
        let isMounted = true;

        // const getStepCardId = (slug: string) =>
        //     product.steps.find(
        //         (step: any) => step.stepType.slug === slug
        //     )?.stepCard?._id;

        const styleId = defaultConfig.styleId;
        const gaugeId = defaultConfig.gaugeId;
        const patternId = defaultConfig.patternId


        const materialId = product.materialId;
        // const genderId = product.product.genderId._id || product.product.genderId; // handle both object or string
        const size = product.size || "l";

        const requestBody = {
            styleId,
            gaugeId,
            patternId,
            materialId,
            genderId,
            size,
        };

        Promise.all([
            getDropdownList(COLOUR_DROPDOWN_URL),
            getYarnCardList({ material: product?.materialId }),
            fetchPriceList(requestBody)
        ])
            .then(([coloursResult, yarnsResult, priceResult]) => {
                console.log('Colours:', coloursResult);
                console.log('priceResult:', priceResult);

                if (isMounted) {
                    setColours(coloursResult || []);
                    setYarnList(yarnsResult?.data || []);
                    setFilterYarnList(yarnsResult?.data || []);
                    setPrice(Math.floor(Number(priceResult?.sizeL)) || null);
                    console.log("price", priceResult?.sizeL, "priceResult", price, priceResult);

                }
            })
            .catch(() => {
                if (isMounted) {
                    setColours([]);
                    setYarnList([]);
                    setFilterYarnList([]);
                    setPrice(null);
                }
            });

        if (product?.steps?.[1]?.stepCard?.slug) {
            setSelectedYarn(product.steps[1].stepCard.slug);
        }

        return () => {
            isMounted = false;
        };
    }, [product]);

    const toggleColor = (color: string) => {
        setSelectedColor((prev) => {
            if (prev === color) {
                setFilterYarnList(yarnList); // Show all yarns when unchecking
                setSelectedYarn(null);
                return null;
            } else {
                const filteredYarns = yarnList.filter((yarn) => yarn.colourId === color);
                setFilterYarnList(filteredYarns);
                setSelectedYarn(null);
                return color;
            }
        });
    };

    const handleAddToCart = (yarnId: any) => {
        const genderId = product.product.genderId._id || product.product.genderId;
        const productTypeId = product.product.productTypeId?._id;
        const productId = product._id;
        const size = product.size || 'l';
        const measurementData = product.measurements || null;
        const createdBy = product.createdBy || 'shop';
        const instructions = product.instructions || '';

        const steps = product.steps.map((step: any) => ({
            stepType: step.stepType._id,
            slug: step.stepType.slug,
            stepCard: step.stepCard._id,
        }));

        const fittingStep = steps.find((s: any) => s.slug === 'fitting');
        const fittingId = fittingStep?.stepCard || null;
        const fittingSizeId = fittingId;
        if (!yarnId) {
            yarnId = product.yarnId; // Use the existing yarnId if not provided
        }

        const payload = {
            yarn: yarnId,
            steps,
            productId,
            fittingId,
            genderId,
            fittingSizeId,
            productTypeId: productTypeId,
            quantity: 1,
            measurements: measurementData,
            price: product.price,
            size,
            createdBy,
            instructions,
        };

        console.log('Payload:', payload);

        dispatch(setLoading(true));
        userAxiosInstance
            .post(ADD_TO_CART_URL, payload)
            .then((response) => {
                console.log('Add to cart response:', response);

                const success = response?.data?.success;
                const code = response?.data?.code;
                const message = response?.data?.message;

                if (success && code === 201) {
                    toast.success(message || "Added to cart successfully!");
                    dispatch(setUserSettingIncreaseCartCount());
                    router.push(USER_ROUTES.cart);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(MESSAGES.SOMETHING_WENT_WRONG);
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
        onClose();
    };

    const selectYarn = (yarnId: string) => {
        setSelectedYarn(yarnId);
        handleAddToCart(yarnId);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white max-w-6xl w-full rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
                <h2 className="text-xl font-medium mb-4">
                    Please change color and yarn for re-order sweater
                </h2>

                {/* Product Preview */}
                {product?.steps?.[2]?.stepCard?.realImage && (
                    <div className="mb-4">
                        <Image
                            src={getAWSImageUrl(product.steps[2].stepCard.realImage)}
                            alt="Sweater Preview"
                            width={120}
                            height={120}
                            className="rounded-md"
                        />
                    </div>
                )}

                {/* Colour Selection */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Colour</label>
                    <div className="flex flex-wrap gap-4">
                        {colours.map((color) => (
                            <label key={color.value || color.label} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={selectedColor === color.value}
                                    onChange={() => toggleColor(color.value)}
                                />
                                <span>{color.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Material/Yarn Grid */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Material</label>
                    <div className="grid grid-cols-4 gap-4 max-h-[400px] overflow-y-auto">
                        {filterYarnList.map((yarn, index) => (
                            <div
                                key={yarn._id || yarn.slug || yarn.title?.en || index}
                                className="border p-2 rounded-md text-center"
                            >
                                <div className="h-32 bg-gray-200 mb-2 flex items-center justify-center">
                                    {yarn.image ? (
                                        <Image
                                            src={getAWSImageUrl(yarn.image)}
                                            alt="Yarn Image"
                                            width={100}
                                            height={100}
                                            className="rounded"
                                        />
                                    ) : (
                                        <span className="text-gray-500 text-sm">Yarn Preview</span>
                                    )}
                                </div>
                                <div className="font-medium text-sm">{yarn.name || yarn.slug}</div>
                                <div className="text-sm text-gray-500">€ {price}</div>
                                <button
                                    className={`mt-2 w-full px-4 py-1 text-sm rounded border ${selectedYarn === yarn.slug
                                        ? 'bg-black text-white'
                                        : 'bg-white text-black'
                                        }`}
                                    onClick={() => selectYarn(yarn._id)}
                                >
                                    SELECT
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-4 mt-4">
                    <button
                        // onClick={onGoToCart}
                        onClick={() => handleAddToCart(product.yarnId)}
                        className="bg-[#bda77c] text-white px-6 py-2 rounded"
                    >
                        Go to Cart
                    </button>
                    <button
                        onClick={onClose}
                        className="border border-[#bda77c] text-[#bda77c] px-6 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
