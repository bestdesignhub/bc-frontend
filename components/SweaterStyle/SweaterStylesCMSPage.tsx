'use client';

import React, { useEffect, useState } from 'react';
import userAxiosInstance from '@/config/userAxiosInstance';
import { CMS_PAGE_BY_SLUG_URL } from '@/constants/apis';
import { useTranslations } from 'next-intl';
import { setLoading } from '@/lib/redux/slices/loaderSlice';
import { dispatch } from '@/lib/redux/store';
import toast from 'react-hot-toast';

export default function SweaterStylesCMSPage() {
    const t = useTranslations();
    const [cmsData, setCmsData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCMSPage = async () => {
            try {
                dispatch(setLoading(true));
                const response = await userAxiosInstance.post(CMS_PAGE_BY_SLUG_URL, {
                    slug: 'our-sweater-styles',  // match your slug in CMS
                    language: 'en',
                });

                if (response?.data?.data) {
                    setCmsData(response.data.data);
                } else {
                    setError('No content found');
                }
            } catch (err) {
                console.error('CMS fetch error:', err);
                setError('Failed to load content.');
                toast.error(err instanceof Error ? err.message : 'An error occurred while fetching data.');
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchCMSPage();
    }, []);

    if (error) {
        return <p style={{ textAlign: 'center' }}>{error}</p>;
    }

    if (!cmsData) {
        return <p style={{ textAlign: 'center' }}>{t('COMMON.LOADING')}</p>;
    }

    return (
        <section className="all-sweater-style f-container">
            <h1>{cmsData?.title || 'Our Sweater Styles'}</h1>
            <div
                className="all-sweater-content"
                dangerouslySetInnerHTML={{ __html: cmsData?.content }}
            />
        </section>
    );
}
