// // MeasurementInput.tsx
// import React from "react";

// interface MeasurementInputProps {
//     label: string;
//     value: number;
//     tolerance: number;
//     onChange?: (value: number) => void;
// }

// const MeasurementInput: React.FC<MeasurementInputProps> = ({
//     label,
//     value,
//     tolerance,
//     onChange,
// }) => {
//     const min = value - tolerance;
//     const max = value + tolerance;
//     return (
//         <div className="measure-row">
//             <div className="measure-label">{label}</div>
//             <input
//                 className="measure-input"
//                 type="number"
//                 value={value}
//                 onChange={(e) => onChange?.(parseFloat(e.target.value))}
//             // readOnly
//             />
//             {/* <span className="tolerance">+/- {tolerance}</span> */}
//             <span style={{ fontSize: "0.85rem", color: "#555" }}>
//                 ± {tolerance} ({min}–{max})
//             </span>
//         </div>
//     );
// };

// export default MeasurementInput;



// measurementInput.tsx
// import { useState, useEffect } from "react";

// interface Props {
//     label: string;
//     value: number;
//     tolerance: number;
//     onChange: (value: number) => void;
// }

// const MeasurementInput: React.FC<Props> = ({ label, value, tolerance, onChange }) => {
//     const [input, setInput] = useState(value.toString());

//     const min = value - tolerance;
//     const max = value + tolerance;

//     useEffect(() => {
//         setInput(value.toString());
//     }, [value]);

//     const parseInput = (raw: string): number | null => {
//         try {
//             const result = Function('"use strict";return (' + raw + ')')();
//             return isNaN(result) ? null : result;
//         } catch {
//             return null;
//         }
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const raw = e.target.value;
//         setInput(raw);

//         const parsed = parseInput(raw);

//         // Enforce range validation
//         if (parsed !== null && parsed >= min && parsed <= max) {
//             onChange(parsed);
//         }
//     };

//     return (
//         <div style={{ marginBottom: "12px" }}>
//             <label style={{ display: "block", fontWeight: "500", marginBottom: "4px" }}>{label}</label>
//             <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={handleChange}
//                     style={{
//                         width: "80px",
//                         padding: "6px",
//                         borderRadius: "4px",
//                         border: "1px solid #ccc",
//                     }}
//                 />
//                 <span style={{ fontSize: "0.85rem", color: "#555" }}>
//                     ± {tolerance} ({min}–{max})
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default MeasurementInput;


import { useState, useEffect } from "react";

interface MeasurementInputProps {
    label: string;
    value: number;
    tolerance: number;
    baseValue: number; // ✅ constant used to define min/max
    onChange: (value: number) => void;
}

const MeasurementInput: React.FC<MeasurementInputProps> = ({
    label,
    value,
    tolerance,
    baseValue,
    onChange,
}) => {
    const [input, setInput] = useState(value.toString());

    const min = baseValue - tolerance;
    const max = baseValue + tolerance;
    console.log(input, "input");

    useEffect(() => {
        setInput(value.toString());
    }, [value]);

    const parseInput = (raw: string): number | null => {
        try {
            const result = parseFloat(raw);
            return isNaN(result) ? null : result;
        } catch {
            return null;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;


        const parsed = parseInput(raw);

        // Only call onChange if within range
        if (parsed !== null && parsed >= min && parsed <= max) {
            onChange(parsed);
            setInput(raw);
        }
    };

    // return (
    //     <div style={{ marginBottom: "12px" }}>
    //         <label style={{ display: "block", fontWeight: "500", marginBottom: "4px" }}>{label}</label>
    //         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    //             <input
    //                 type="text"
    //                 value={input}
    //                 onChange={handleChange}
    //                 style={{
    //                     width: "80px",
    //                     padding: "6px",
    //                     borderRadius: "4px",
    //                     border: "1px solid #ccc",
    //                 }}
    //             />
    //             <span style={{ fontSize: "0.85rem", color: "#555" }}>
    //                 ± {tolerance} ({min}–{max})
    //             </span>
    //         </div>
    //     </div>
    // );

    return (
        <div className="measure-row">
            <div className="measure-label">{label}</div>
            <input
                className="measure-input"
                type="number"
                value={value}
                onChange={handleChange}
            />
            {/* <span className="tolerance">+/- {tolerance}</span> */}
            <span style={{ fontSize: "0.85rem", color: "#555" }}>
                ± {tolerance} ({min}–{max})
            </span>
        </div>
    );
};

export default MeasurementInput;
