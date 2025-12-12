'use client';

import React, { useState, startTransition } from 'react';
import Image from 'next/image';
import { Row, Col, Form } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import '@/app/styles/gauge-product.css';

// Lazy loaded components
const GaugeBanner = dynamic(() => import('./gauge-banner'));
const GaugeNavigate = dynamic(() => import('./gauge-navigate'));
const StepBreadcrumb = dynamic(() => import('./step-breadcrumb'));

interface GaugeItemType {
  id: number;
  image: string;
  name: string;
  text: string;
  buttonText: string;
}

import GaugeData from './gauge-data';

export default function Gauge() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelection = (id: number) => {
    setSelectedProduct(id);
  };

  const handleButtonClick = (id: number) => {
    setLoading(true); // show loader

    startTransition(() => {
      setSelectedProduct(id);
      router.push(`/gauge/${id}`);
    });
  };

  return (
    <>
      {/* Loader on top of everything */}
      {loading && (
        <div className="inline-loader">
          Loading...
        </div>
      )}

      <GaugeBanner />
      <GaugeNavigate />

      <div className="gauge-wrapper">
        <div className="gauge-row">
          <Row>
            {GaugeData.map((gauge: GaugeItemType) => (
              <Col xs={12} md={6} lg={4} key={gauge.id}>
                <div
                  className={`gaugebox ${selectedProduct === gauge.id ? 'selected' : ''}`}
                >
                  <Form.Check
                    inline
                    type="radio"
                    name="product"
                    id={`pr-${gauge.id}`}
                    checked={selectedProduct === gauge.id}
                    onChange={() => handleSelection(gauge.id)}
                  />

                  <div className="image">
                    <Image
                      loading="lazy"
                      src={gauge.image}
                      width={550}
                      height={336}
                      alt={gauge.name}
                      quality={70}
                    />
                  </div>

                  <div className="info">
                    <h4>{gauge.name}</h4>
                    <p>{gauge.text}</p>
                  </div>

                  <button onClick={() => handleButtonClick(gauge.id)}>
                    {gauge.buttonText}
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <StepBreadcrumb />
    </>
  );
}
