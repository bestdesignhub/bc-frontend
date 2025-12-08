'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import StepCard from './step-card';
import { Row } from 'react-bootstrap';
import { URL_SLUG, USER_ROUTES } from '@/constants';

interface StyleSelectorProps {
    styles: any[];
    price: number;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ styles, price }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedStyleId = searchParams.get('style');

    // ----------------------------
    // 🔥 Keywords to match
    // ----------------------------
    const KEYWORDS = ["v neck", "crew neck", "mock neck"];

    // ----------------------------
    // 🔥 Step 1: Make lowercase lists
    // ----------------------------
    const lowerKeywords = KEYWORDS.map(k => k.toLowerCase());

    // ----------------------------
    // 🔥 Step 2: For each keyword → find FIRST matching item
    // ----------------------------
    const matchedStyles = lowerKeywords
        .map(keyword =>
            styles.find(style =>
                style?.title?.toLowerCase().includes(keyword)
            )
        )
        .filter(Boolean); // remove empty results

    // ----------------------------

    const handleStyleSelect = (styleId: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const change = searchParams?.get(URL_SLUG.CHANGE);

        if (change === 'true') {
            params.delete('style');
            params.delete(URL_SLUG.CHANGE);
            params.set('style', styleId);
            router.push(`?${params.toString()}`);
            router.push(`${USER_ROUTES.sweater}/last-step?${params.toString()}`);
        } else {
            params.set('style', styleId);
            router.push(`?${params.toString()}`);
        }
    };

    return (
        <Row className="g-4">
            {matchedStyles.map((style: any) => (
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
