'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import userAxiosInstance from '@/config/userAxiosInstance';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import toast from 'react-hot-toast';
import { getAWSImageUrl } from '@/utils/common.utils';

// interface StepItem {
//     _id: string;
//     title: string;
//     filePath: string;
// }

export default function ShowroomSteps() {
    const [mainImage, setMainImage] = useState<string>('');

    useEffect(() => {
        const fetchSteps = async () => {
            try {
                dispatch(setLoading(true));
                const response = await userAxiosInstance.post('/image-gallery/list', {
                    page: 1,
                    limit: 20,
                    category: 'Ordering Steps',
                    sortOrder: 'asc',
                });

                if (response?.data?.data) {
                    const allItems = response.data?.data?.data;

                    // Separate main image & steps
                    const main = allItems.find((item: any) => item.title.toLowerCase() === 'main image');
                    if (main) setMainImage(main.filePath);
                }
            } catch (err) {
                console.error('Ordering steps fetch error:', err);
                toast.error(err instanceof Error ? err.message : 'Failed to load ordering steps.');
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchSteps();
    }, []);

    return (
        <section className="ordering-steps">
            {mainImage && (
                <div className="ordering-steps-img">
                    <Image src={getAWSImageUrl(mainImage)} alt="4 easy ordering steps" width={1920} height={430} />
                </div>
            )}
        </section>
    );
}
