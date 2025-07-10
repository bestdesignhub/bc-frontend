'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import StepCard from './step-card'; // Adjust import path accordingly
import { Row } from 'react-bootstrap';
import { URL_SLUG, USER_ROUTES } from '@/constants';

interface StyleSelectorProps {
    styles: any[];
    // priceMap: Record<string, number>;
    price: number;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ styles, price }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedStyleId = searchParams.get('style');

    const handleStyleSelect = (styleId: string) => {
        const params = new URLSearchParams(searchParams.toString());

        // const edit = searchParams?.get(URL_SLUG.EDIT);
        const change = searchParams?.get(URL_SLUG.CHANGE);
        if (change === 'true') {
            params.delete('style');
            params.delete(URL_SLUG.CHANGE);
            params.set('style', styleId);
            router.push(`?${params.toString()}`);
            router.push(
                `${USER_ROUTES.sweater}/last-step?${params.toString()}`
            );
        } else {
            params.set('style', styleId);
            // params.delete('style');
            router.push(`?${params.toString()}`);
        }

    };

    return (
        <Row className="g-4">
            {styles.map((style) => (
                <StepCard
                    key={style._id}
                    stepData={style}
                    onChange={handleStyleSelect}
                    nextSlugId={selectedStyleId || ''}
                    price={price || 0}
                />
            ))}
        </Row>
    );
};

export default StyleSelector;
