
'use client'
import userAxiosInstance from '@/config/userAxiosInstance';
import { MESSAGES } from '@/constants';
import { MY_ADDRESS_LIST_URL } from '@/constants/apis';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import router from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const CreateProduct = (data: any) => {

    const {
        stepData,
        // currentStepData,
        filteredAvailableSizes,
        yarn,
        gauge,
        pattern,
        style,
        userMeasurementBySlug,
        userMeasurementActiveList,
        measurementProfile,
        productTypeId,
        fittingName,
        steps,
        productId,
        fittingId,
        availableSizes,
        measurementProfiles
    } = data;

    const [title, setTitle] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!title || !image) {
            alert('Please provide both title and image.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append("productTypeId", data.productTypeId);
        formData.append("yarn", data.yarn);
        formData.append("genderId", data.genderId);

        formData.append("patternId", data.steps.pattern);
        formData.append("gaugeId", data.steps.gauge);
        formData.append("styleId", data.steps.style);
        formData.append("colourId", data.colourId);
        formData.append("materialId", data.materialId);
        formData.append("basePriceXs", data.price);


        setIsSubmitting(true);

        try {
            dispatch(setLoading(true));
            //         const response = await userAxiosInstance.post(MY_ADDRESS_LIST_URL);
            //         if (response?.data?.success) {
            //             // if (!selectedAddress) {
            //             // onSelect?.(response?.data?.data?.[0] ?? '');
            //             // }
            //             // setAddresses(response.data.data);
            //         }

            //     if (!response.ok) {
            //         throw new Error('Failed to save product');
            //     }

            //     alert('Product saved successfully!');
            //     setTitle('');
            //     setImage(null);
            // } catch (error) {
            //     console.error(error);
            //     alert('Error saving product');
            // } finally {
            //     setIsSubmitting(false);
            // }



            const response = await userAxiosInstance({
                url: "/product-template/add",
                method: 'POST',
                data: formData,
            });

            if (response.data.success) {
                toast.success(MESSAGES.SUCCESS);
                // methods.reset();
                // router.refresh();
            }
        } catch (error) {
            console.error(error);
            toast.error((MESSAGES.SOMETHING_WENT_WRONG));
        } finally {
            setDisableSubmit(false);
            dispatch(setLoading(false));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
                {isSubmitting ? 'Saving...' : 'Save'}
            </button>
        </form>
    );
};

export default CreateProduct;

function setDisableSubmit(arg0: boolean) {
    throw new Error('Function not implemented.');
}
