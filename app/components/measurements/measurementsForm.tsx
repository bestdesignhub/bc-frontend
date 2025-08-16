// // MeasurementsForm.tsx
"use client";
// import { useState } from "react";
// import MeasurementInput from "@/app/components/measurements/measurementInput";

// interface Measurement {
//     label: string;
//     value: number;
//     tolerance: number;
// }

// interface MeasurementsFormProps {
//     measurements: Measurement[];
// }

// const MeasurementsForm: React.FC<MeasurementsFormProps> = ({ measurements }) => {
//     const [values, setValues] = useState<Measurement[]>(measurements);
//     const [measurement, setMeasurements] = useState(measurements);

//     const handleChange = (index: number, newValue: number) => {
//         console.log(measurement);
//         const updatedValues = [...values];
//         updatedValues[index].value = newValue;
//         setValues(updatedValues);
//         setMeasurements(updatedValues);
//         sessionStorage.setItem("measurements", JSON.stringify(updatedValues));
//     };
//     return (
//         <div className="measurements">
//             {values.map((measure, index) => (
//                 <MeasurementInput
//                     key={index}
//                     label={measure.label}
//                     value={measure.value}
//                     tolerance={measure.tolerance}
//                     onChange={(newValue) => handleChange(index, newValue)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default MeasurementsForm;

// import { useState, useEffect } from "react";
// import MeasurementInput from "./measurementInput";

// interface Measurement {
//     label: string;
//     value: number;
//     tolerance: number;
// }

// interface MeasurementsFormProps {
//     measurements: Measurement[];
// }

// const MeasurementsForm: React.FC<MeasurementsFormProps> = ({ measurements }) => {
//     const [values, setValues] = useState<Measurement[]>([]);

//     useEffect(() => {
//         if (measurements && measurements.length > 0) {
//             setValues(measurements);
//         }
//     }, [measurements]);

//     const handleChange = (index: number, newValue: number) => {
//         const updatedValues = [...values];
//         updatedValues[index].value = newValue;
//         setValues(updatedValues);
//         sessionStorage.setItem("measurements", JSON.stringify(updatedValues));
//     };

//     return (
//         <div className="measurements">
//             {values.map((measure, index) => (
//                 <MeasurementInput
//                     key={index}
//                     label={measure.label}
//                     value={measure.value}
//                     tolerance={measure.tolerance}
//                     onChange={(newValue) => handleChange(index, newValue)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default MeasurementsForm;

"use client";

import { useState, useEffect } from "react";
import MeasurementInput from "./measurementInput";

interface Measurement {
    label: string;
    value: number;
    tolerance: number;
    baseValue: number; // ✅ added to keep original base for validation
}

interface MeasurementsFormProps {
    measurements: {
        label: string;
        value: number;
        tolerance: number;
    }[];
}

const MeasurementsForm: React.FC<MeasurementsFormProps> = ({ measurements }) => {
    const [values, setValues] = useState<Measurement[]>([]);

    useEffect(() => {
        if (measurements && measurements.length > 0) {
            const initialized = measurements.map((m) => ({
                ...m,
                baseValue: m.value, // ✅ store original base value
            }));
            setValues(initialized);
        }
    }, [measurements]);

    const handleChange = (index: number, newValue: number) => {
        console.log(`Updating measurement at index ${index} to new value: ${measurements[index].value} = ${newValue}`);
        const max = measurements[index].value + measurements[index].tolerance;
        const min = measurements[index].value - measurements[index].tolerance;
        if (newValue > max || newValue < min) {
            console.warn(`New value ${newValue} is out of bounds for measurement ${measurements[index].label}. Allowed range: ${min} - ${max}`);
            return; // Prevent updating if out of bounds

        }
        const updatedValues = [...values];
        updatedValues[index].value = newValue;
        setValues(updatedValues);
        sessionStorage.setItem("measurements", JSON.stringify(updatedValues));
    };

    return (
        <div className="measurements">
            {values.map((measure, index) => (
                <MeasurementInput
                    key={index}
                    label={measure.label}
                    value={measure.value}
                    tolerance={measure.tolerance}
                    baseValue={measure.baseValue}
                    onChange={(newValue) => handleChange(index, newValue)}
                />
            ))}
        </div>
    );
};

export default MeasurementsForm;
