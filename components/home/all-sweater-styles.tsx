'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import userAxiosInstance from '@/config/userAxiosInstance';
import { dispatch } from '@/lib/redux/store';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import toast from 'react-hot-toast';
import { getAWSImageUrl } from '@/utils/common.utils';

interface SweaterItem {
    _id: string;
    title: string;
    filePath: string;
}

export default function AllSweaterStyles() {
    const [items, setItems] = useState<SweaterItem[]>([]);

    useEffect(() => {
        const fetchSweaterStyles = async () => {
            try {
                dispatch(setLoading(true));

                const res = await userAxiosInstance.post('/image-gallery/list', {
                    page: 1,
                    limit: 5,
                    category: 'Our All Sweater Styles', // must match your DB category
                    sortOrder: 'asc',
                });

                if (res?.data?.data?.data) {
                    setItems(res.data.data.data);
                } else {
                    toast.error('No sweater styles found.');
                }
            } catch (error) {
                console.error('Error fetching sweater styles:', error);
                toast.error('Failed to load sweater styles.');
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchSweaterStyles();
    }, []);

    return (
        <section className="all-sweater-style f-container">
            <h3>Our All Sweater Styles</h3>
            <ul className="all-sweater-list">
                {items.map((item) => (
                    <li key={item._id}>
                        <Link
                            className="sweater-style-img"
                            href="#"
                            title={item.title}
                        >
                            <img src={getAWSImageUrl(item.filePath)} alt={item.title} />

                        </Link>
                        <Link
                            className="sweater-style-name"
                            href="#"
                            title={item.title}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
