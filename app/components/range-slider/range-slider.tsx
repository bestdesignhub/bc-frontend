'use client';
import React, { useEffect, useRef, useState } from 'react';
import noUiSlider, { API } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import '@/app/styles/range-slider.css';

type SliderElement = HTMLDivElement & { noUiSlider?: API };

export default function RangeSlider() {
  const sliderRef = useRef<SliderElement | null>(null);
  const [values, setValues] = useState({ from: 20, to: 80 });

  useEffect(() => {
    if (sliderRef.current) {
      if (sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider?.on('update', (updatedValues: (string | number)[]) => {
          // Convert string | number to number before updating state
          setValues({
            from: Math.round(Number(updatedValues[0])),
            to: Math.round(Number(updatedValues[1])),
          });
        });
      } else {
        noUiSlider.create(sliderRef.current, {
          start: [values.from, values.to],
          connect: true,
          range: {
            min: 0,
            max: 100,
          },
        });
      }
    }

    // Cleanup slider instance
    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, [values.from, values.to]);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: Number(value) };
    setValues(newValues);

    if (sliderRef.current && sliderRef.current.noUiSlider) {
      sliderRef.current.noUiSlider.set([newValues.from, newValues.to]);
    }
  };

  return (
    <div className="range-slider-container">
      <div ref={sliderRef}></div>
      <div className="inputs">
        <label>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.1 17.7411V0.181098H6.48V17.7411H5.1ZM5.96 16.2411C4.93333 16.2411 4.04 16.0544 3.28 15.6811C2.52 15.3078 1.93333 14.7878 1.52 14.1211C1.10667 13.4544 0.9 12.6811 0.9 11.8011H2.66C2.66 12.3478 2.78667 12.8544 3.04 13.3211C3.29333 13.7744 3.66 14.1411 4.14 14.4211C4.63333 14.6878 5.24 14.8211 5.96 14.8211C6.58667 14.8211 7.12 14.7211 7.56 14.5211C8.01333 14.3078 8.35333 14.0211 8.58 13.6611C8.82 13.3011 8.94 12.8944 8.94 12.4411C8.94 11.8944 8.82 11.4544 8.58 11.1211C8.35333 10.7744 8.04 10.4944 7.64 10.2811C7.24 10.0678 6.77333 9.8811 6.24 9.7211C5.72 9.54776 5.17333 9.3611 4.6 9.1611C3.49333 8.78777 2.68 8.32777 2.16 7.7811C1.64 7.2211 1.38 6.49443 1.38 5.6011C1.38 4.8411 1.55333 4.17443 1.9 3.6011C2.26 3.02776 2.76667 2.5811 3.42 2.2611C4.08667 1.92776 4.87333 1.7611 5.78 1.7611C6.67333 1.7611 7.44667 1.92776 8.1 2.2611C8.76667 2.59443 9.28667 3.05443 9.66 3.6411C10.0333 4.21443 10.22 4.8811 10.22 5.6411H8.46C8.46 5.25443 8.36 4.87443 8.16 4.5011C7.96 4.12776 7.65333 3.8211 7.24 3.5811C6.84 3.32776 6.33333 3.2011 5.72 3.2011C5.21333 3.18776 4.76 3.27443 4.36 3.4611C3.97333 3.63443 3.66667 3.88776 3.44 4.2211C3.22667 4.55443 3.12 4.9611 3.12 5.4411C3.12 5.89443 3.21333 6.2611 3.4 6.5411C3.6 6.8211 3.88 7.0611 4.24 7.2611C4.61333 7.44777 5.04667 7.6211 5.54 7.7811C6.03333 7.9411 6.58 8.1211 7.18 8.3211C7.86 8.54777 8.46 8.82777 8.98 9.1611C9.51333 9.4811 9.92667 9.89443 10.22 10.4011C10.5267 10.9078 10.68 11.5544 10.68 12.3411C10.68 13.0078 10.5 13.6411 10.14 14.2411C9.79333 14.8278 9.27333 15.3078 8.58 15.6811C7.88667 16.0544 7.01333 16.2411 5.96 16.2411Z"
              fill="black"
            />
          </svg>
          <input
            type="number"
            name="from"
            value={values.from}
            onChange={handleInputChange}
            min="0"
            max="100"
          />
        </label>
        <span>To: </span>
        <label>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.1 17.7411V0.181098H6.48V17.7411H5.1ZM5.96 16.2411C4.93333 16.2411 4.04 16.0544 3.28 15.6811C2.52 15.3078 1.93333 14.7878 1.52 14.1211C1.10667 13.4544 0.9 12.6811 0.9 11.8011H2.66C2.66 12.3478 2.78667 12.8544 3.04 13.3211C3.29333 13.7744 3.66 14.1411 4.14 14.4211C4.63333 14.6878 5.24 14.8211 5.96 14.8211C6.58667 14.8211 7.12 14.7211 7.56 14.5211C8.01333 14.3078 8.35333 14.0211 8.58 13.6611C8.82 13.3011 8.94 12.8944 8.94 12.4411C8.94 11.8944 8.82 11.4544 8.58 11.1211C8.35333 10.7744 8.04 10.4944 7.64 10.2811C7.24 10.0678 6.77333 9.8811 6.24 9.7211C5.72 9.54776 5.17333 9.3611 4.6 9.1611C3.49333 8.78777 2.68 8.32777 2.16 7.7811C1.64 7.2211 1.38 6.49443 1.38 5.6011C1.38 4.8411 1.55333 4.17443 1.9 3.6011C2.26 3.02776 2.76667 2.5811 3.42 2.2611C4.08667 1.92776 4.87333 1.7611 5.78 1.7611C6.67333 1.7611 7.44667 1.92776 8.1 2.2611C8.76667 2.59443 9.28667 3.05443 9.66 3.6411C10.0333 4.21443 10.22 4.8811 10.22 5.6411H8.46C8.46 5.25443 8.36 4.87443 8.16 4.5011C7.96 4.12776 7.65333 3.8211 7.24 3.5811C6.84 3.32776 6.33333 3.2011 5.72 3.2011C5.21333 3.18776 4.76 3.27443 4.36 3.4611C3.97333 3.63443 3.66667 3.88776 3.44 4.2211C3.22667 4.55443 3.12 4.9611 3.12 5.4411C3.12 5.89443 3.21333 6.2611 3.4 6.5411C3.6 6.8211 3.88 7.0611 4.24 7.2611C4.61333 7.44777 5.04667 7.6211 5.54 7.7811C6.03333 7.9411 6.58 8.1211 7.18 8.3211C7.86 8.54777 8.46 8.82777 8.98 9.1611C9.51333 9.4811 9.92667 9.89443 10.22 10.4011C10.5267 10.9078 10.68 11.5544 10.68 12.3411C10.68 13.0078 10.5 13.6411 10.14 14.2411C9.79333 14.8278 9.27333 15.3078 8.58 15.6811C7.88667 16.0544 7.01333 16.2411 5.96 16.2411Z"
              fill="black"
            />
          </svg>

          <input
            type="number"
            name="to"
            value={values.to}
            onChange={handleInputChange}
            min="0"
            max="100"
          />
        </label>
      </div>
    </div>
  );
}
