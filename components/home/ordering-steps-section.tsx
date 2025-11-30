'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import userAxiosInstance from '@/config/userAxiosInstance';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import toast from 'react-hot-toast';
import { getAWSImageUrl } from '@/utils/common.utils';

interface StepItem {
    _id: string;
    title: string;
    filePath: string;
}

export default function OrderingStepsSection() {
    const [steps, setSteps] = useState<StepItem[]>([]);

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
                    const stepsList = allItems.filter(
                        (item: any) => item.title.toLowerCase() !== 'main image'
                    );
                    setSteps(
                        stepsList.map((item: any) => ({
                            _id: item._id,
                            title: item.title,
                            filePath: item.filePath,
                        }))
                    );
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
            <div className="four-steps">
                <h4>4 easy ordering steps</h4>
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit...
                </p>

                <ul className="order-steps">
                    {steps.map((step, index) => (
                        <li key={step._id}>
                            <div className="step-box">
                                <span className="step-number">{index + 1}</span>
                                <span className="step-icon">
                                    <Image src={getAWSImageUrl(step.filePath)} alt={step.title} width={80} height={80} />

                                </span>
                            </div>
                            <span className="step-text">{step.title}</span>
                        </li>
                    ))}
                </ul>

                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit...
                </p>
            </div>
        </section>
    );
}
