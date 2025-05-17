""// MeasurementInput.tsx
import React from "react";

interface MeasurementInputProps {
    label: string;
    value: number;
    tolerance: number;
    onChange?: (value: number) => void;
}

const MeasurementInput: React.FC<MeasurementInputProps> = ({
    label,
    value,
    tolerance,
    onChange,
}) => {
    return (
        <div className="measure-row">
            <div className="measure-label">{label}</div>
            <input
                className="measure-input"
                type="number"
                value={value}
                onChange={(e) => onChange?.(parseFloat(e.target.value))}
            />
            <span className="tolerance">+/- {tolerance}</span>
        </div>
    );
};

export default MeasurementInput;

