'use client';

import {
    CustomPagination,
    ProductListing,
    ProductTopbar,
    StepBanner,
    StepNavigate,
    YarnListingSidebar,
} from '@/components';
import GenderModalWrapper from '@/components/modals/gender-modal/gender-modal-wrapper';
import userAxiosInstance from '@/config/userAxiosInstance';
import { PRODUCT_PRICE_BY_SIZE_ } from '@/constants/apis';
import { Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const genderBasedConfig: Record<string, {
    styleId: string;
    gaugeId: string;
    patternId: string;
}> = {
    '6798793f705aedfe39db13b1': {
        styleId: '6835601871b93cf4de274515',
        gaugeId: '678e68649b451d2d5b771b26',
        patternId: '682632f11df3ffe9dcf68a9b',
    },
    '67987972705aedfe39db13b8': {
        styleId: '683560f971b93cf4de274543',
        gaugeId: '678e68649b451d2d5b771b26',
        patternId: '682553c4fbba7d5cd661eadf',
    },
};

const SweaterPageClient = ({
    genders,
    colours,
    materials,
    filteredYarnList,
    genderSlug,
    materialId,
    translationLabel,
    currentPage,
    totalPage,
}: {
    genders: any[];
    colours: any[];
    materials: any[];
    filteredYarnList: any[];
    genderSlug: string;
    materialId: string;
    translationLabel: string;
    currentPage: number;
    totalPage: number;
}) => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        if (!genderSlug || !materialId) return;

        const timeout = setTimeout(() => {
            const fetchPrice = async () => {
                const genderConfig = genderBasedConfig[genderSlug];
                if (genderConfig && materialId) {
                    try {
                        const requestBody = {
                            styleId: genderConfig.styleId,
                            gaugeId: genderConfig.gaugeId,
                            patternId: genderConfig.patternId,
                            materialId,
                            genderId: genderSlug,
                            size: 'l',
                        };
                        const response = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_, requestBody);
                        const priceValue = response.data.data?.sizeL;
                        setPrice(Number(priceValue));
                    } catch (error) {
                        console.error('Error fetching price list:', error);
                    }
                }
            };

            fetchPrice();
        }, 300);
        return () => clearTimeout(timeout); // cleanup
    }, [genderSlug, materialId]);

    return (
        <div className="sweater-inner-step">
            <StepBanner step="1" stepData={{ label: translationLabel }} />
            <div className="container">
                <div className="sweater-inner-container">
                    <div className="woman-product-wrappe bgsweater">
                        <Row className="g-4 no-horizontal-padding">
                            <Col xs={12} lg={2}>
                                <StepNavigate genders={genders} genderSlug={genderSlug} price={price ?? 0} />
                            </Col>
                            <Col xs={12} lg={10}>
                                <div className="sweater-bg-step">
                                    <YarnListingSidebar
                                        genders={genders}
                                        colours={colours}
                                        materials={materials}
                                        price={price ?? 0}
                                    />
                                    {!genderSlug && (
                                        <GenderModalWrapper
                                            genders={genders}
                                            material={materials[1]?.value}
                                        />
                                    )}
                                    <ProductTopbar text={translationLabel} total={filteredYarnList?.length} />
                                    <ProductListing list={filteredYarnList} genderSlug={genderSlug} price={price ?? 0} />
                                    <CustomPagination currentPage={currentPage} totalPage={totalPage} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SweaterPageClient;
