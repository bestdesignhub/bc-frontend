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

    const handleChange = (index: number, newValue: number) => {
        const updatedValues = [...values];
        updatedValues[index].value = newValue;
        setValues(updatedValues);
        console.log("Updated Measurements:", updatedValues);
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
                />
            ))}
        </div>
    );
};

export default MeasurementsForm;
