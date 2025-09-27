'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import userAxiosInstance from '@/config/userAxiosInstance';
import toast from 'react-hot-toast';
import { getAWSImageUrl } from '@/utils/common.utils';

interface SweaterItem {
    id: string;
    title: string;
    imageUrl: string;
    link?: string;
}

interface StyleBlock {
    title: string;
    subtitle?: string;
    imageUrl: string;
}

export default function CustomSweaterSection() {
    const [sweaters, setSweaters] = useState<SweaterItem[]>([]);
    const [styleBlock, setStyleBlock] = useState<StyleBlock | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Fetch sweaters
            const [sweaterRes, styleRes] = await Promise.all([
                userAxiosInstance.post('/image-gallery/list', {
                    page: 1,
                    limit: 3,
                    category: 'Custom Sweater',
                    // sort: 'createdAt',
                    sortOrder: 'asc',


                }),
                userAxiosInstance.post('/image-gallery/list', {
                    page: 1,
                    limit: 1,
                    category: 'Your Style',
                }),
            ]);

            // Map sweater list
            const sweaterArr = sweaterRes?.data?.data?.data ?? sweaterRes?.data?.data ?? [];
            setSweaters(
                sweaterArr.map((it: any) => ({
                    id: it._id ?? it.id,
                    title: it.title ?? '',
                    imageUrl: it.filePath ?? it.url ?? '',
                    link: it.link || '#',
                }))
            );

            // Map "Your Style" block
            const styleArr = styleRes?.data?.data?.data ?? styleRes?.data?.data ?? [];
            if (styleArr.length > 0) {
                const s = styleArr[0];
                setStyleBlock({
                    title: s.title ?? 'Your Style & Colors',
                    subtitle: s.subtitle ?? 'We create Custom Solutions',
                    imageUrl: s.filePath ?? s.url ?? '/images/your-style.webp',
                });
            }
        } catch (err) {
            console.error('Failed to fetch data', err);
            toast.error('Failed to load gallery data.');
            setSweaters([]);
            setStyleBlock(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <p style={{ textAlign: 'center' }}>Loading...</p>;
    }

    return (
        <section className="create-custom f-container">
            <aside className="custom-sweater">
                <h3>Create Custom Sweater</h3>
                <ul className="custom-sweater-list">
                    {/* {sweaters.map((item) => (
            <li key={item.id}>
              <div className="custom-sweater-img">
                <Link href={item.link} title={item.title}>
                  <img src={item.imageUrl} alt={item.title} />
                </Link>
              </div>
              <Link className="custom-sweater-name" href={item.link} title={item.title}>
                {item.title}
              </Link>
            </li>
          ))} */}
                    {sweaters.map((item) => (
                        <li key={item.id}>
                            {item.link && (
                                <div className="custom-sweater-img">
                                    <Link href={item.link} title={item.title}>
                                        <img src={getAWSImageUrl(item.imageUrl)} alt={item.title} />
                                    </Link>
                                </div>
                            )}
                            <Link className="custom-sweater-name" href={item.link ?? '/'} title={item.title}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="custom-sweater-btn">
                    <li>
                        <Link href="/sweater" title="Create My SWEATER">
                            Create My SWEATER
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" title="Customise a Sweater">
                            Customise a Sweater
                        </Link>
                    </li>
                </ul>
            </aside>

            {styleBlock && (
                <div className="your-style">
                    <h3>{styleBlock.title}</h3>
                    {styleBlock.subtitle && <h4>{styleBlock.subtitle}</h4>}
                    <img className="styleImg" src={getAWSImageUrl(styleBlock.imageUrl)} alt={styleBlock.title} />
                </div>
            )}
        </section>
    );
}
