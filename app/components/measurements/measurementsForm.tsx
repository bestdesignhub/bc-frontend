// MeasurementsForm.tsx
"use client";
import { useState } from "react";
import MeasurementInput from "@/app/components/measurements/measurementInput";

interface Measurement {
    label: string;
    value: number;
    tolerance: number;
}

interface MeasurementsFormProps {
    measurements: Measurement[];
}

const MeasurementsForm: React.FC<MeasurementsFormProps> = ({ measurements }) => {
    const [values, setValues] = useState<Measurement[]>(measurements);
    const [measurement, setMeasurements] = useState(measurements);

    const handleChange = (index: number, newValue: number) => {

        const updatedValues = [...values];
        updatedValues[index].value = newValue;
        setValues(updatedValues);
        sessionStorage.setItem("measurements", JSON.stringify(updatedValues));
    };

    const handleAdjust = (index: any, delta: any) => {
        setMeasurements((prev) =>
            prev.map((item, i) =>
                i === index
                    ? {
                        ...item,
                        value: Math.max(0, item.value + (delta > 0 ? 5 : -5))
                    }
                    : item
            )
        );
    };

    return (
        <div className="measurements">
            {values.map((measure, index) => (
                <MeasurementInput
                    key={index}
                    label={measure.label}
                    value={measure.value}
                    tolerance={measure.tolerance}
                    onChange={(newValue) => handleChange(index, newValue)}
                // onChange={(newValue) => handleAdjust(index, newValue - measure.value)}
                />
            ))}
        </div>
    );
};

export default MeasurementsForm;
