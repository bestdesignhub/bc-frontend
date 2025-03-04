'use client';

import { getAWSImageUrl } from '@/utils/common.utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Col, Form } from 'react-bootstrap';

const StepCard: FC<{
  onChange: (id: string) => void;
  stepData: any;
  nextSlugId: string | null;
}> = ({ onChange, stepData, nextSlugId }) => {
  const t = useTranslations();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col xs={12} md={6} lg={4} key={stepData?._id}>
      <div
        className="gaugebox"
        style={
          nextSlugId === stepData?._id
            ? {
                border: '3px solid',
              }
            : {}
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Form.Check
          inline
          type={'radio'}
          name={'product'}
          id={`pr-${stepData?._id}`}
          onChange={() => onChange(stepData?._id)}
          checked={nextSlugId === stepData?._id}
        />
        <div className="image">
          <Image
            src={getAWSImageUrl(isHovered ? stepData.realImage : stepData.graphImage)}
            width={550}
            height={336}
            alt="product"
            loading="lazy"
          />
        </div>
        <div className="info">
          <h4>{stepData.title}</h4>
          <p>{stepData.description}</p>
        </div>
        <button>{t('COMMON.SELECT')}</button>
      </div>
    </Col>
  );
};

export default StepCard;
