'use client';

import { useEffect, useState } from 'react';
import userAxiosInstance from '@/config/userAxiosInstance';
import { PRODUCT_PRICE_BY_SIZE_ } from '@/constants/apis';

export const PriceProvider = ({
    genderSlug,
    materialId,
    children,
}: {
    genderSlug: string;
    materialId: string;
    children: (price: number | null) => React.ReactNode;
}) => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const genderConfig: any = {
            '6798793f705aedfe39db13b1': {
                styleId: '683115e829bba4f61c928489', // Men
                gaugeId: '678e68649b451d2d5b771b26',
                patternId: '682632f11df3ffe9dcf68a9b',
            },
            '67987972705aedfe39db13b8': {
                styleId: '6831168629bba4f61c9284d1', // Women
                gaugeId: '678e68649b451d2d5b771b26',
                patternId: '682553c4fbba7d5cd661eadf',
            },
        };

        const config = genderConfig[genderSlug];
        if (!config || !materialId) return;

        const fetchPrice = async () => {
            try {
                const response = await userAxiosInstance.post(PRODUCT_PRICE_BY_SIZE_, {
                    ...config,
                    materialId,
                    genderId: genderSlug,
                    size: 'l',
                });

                setPrice(Number(response.data?.data?.sizeL) || 0);
            } catch (err) {
                console.error('Price fetch error', err);
            }
        };

        fetchPrice();
    }, [genderSlug, materialId]);

    return <>{children(price)}</>;
};
