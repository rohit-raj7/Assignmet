// // import  React, { useState, useMemo, ChangeEvent } from "react"; 
// import React, { useState, useMemo } from "react";
// import type { ChangeEvent } from "react";


// import type { InputFieldProps } from "./InputField.types"; 




// const InputField: React.FC<InputFieldProps> = ({
//   value,
//   onChange,
//   label,
//   placeholder,
//   helperText,
//   errorMessage,
//   disabled = false,
//   invalid = false,
//   variant = "outlined",
//   size = "md",
//   type = "text",
//   showClearButton = true,
// }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const baseClasses = "w-full rounded-lg transition-colors duration-200 focus:outline-none";
//   const sizeClasses = {
//     sm: "text-sm h-9 px-3",
//     md: "text-base h-11 px-4",
//     lg: "text-lg h-14 px-5",
//   };
//   const variantClasses = {
//     outlined: "border border-gray-300 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-400",
//     filled: "border border-transparent bg-gray-100 dark:bg-gray-700 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 focus:border-blue-500",
//     ghost: "border border-transparent bg-transparent focus:border-blue-500 dark:focus:border-blue-400",
//   };

//   const stateClasses = invalid
//     ? "border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400"
//     : disabled
//     ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
//     : "";

//   const inputType = type === "password" && !showPassword ? "password" : "text";

//   const handleClear = (e: React.MouseEvent) => {
//     if (onChange) {
//       onChange({
//         ...e,
//         target: { ...e.target, value: "" },
//       } as ChangeEvent<HTMLInputElement>);
//     }
//   };

//   const inputId = useMemo(() => `input-field-${Math.random().toString(36).substr(2, 9)}`, []);

//   return (
//     <div className="flex flex-col mb-4">
//       {label && <label htmlFor={inputId} className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
//       <div className="relative">
//         <input
//           id={inputId}
//           type={inputType}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           disabled={disabled}
//           aria-invalid={invalid}
//           aria-label={label}
//           className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${stateClasses} ${
//             type === "password" || (showClearButton && value) ? "pr-10" : ""
//           }`}
//         />
//         <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
//           {showClearButton && value && !disabled && (
//             <button type="button" onClick={handleClear} aria-label="Clear input" className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
//               ✖
//             </button>
//           )}
//           {type === "password" && (
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//               className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </button>
//           )}
//         </div>
//       </div>
//       {(helperText || errorMessage) && (
//         <p className={`mt-1 text-xs ${invalid ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-400"}`}>
//           {invalid ? errorMessage : helperText}
//         </p>
//       )}
//     </div>
//   );
// };

// export default InputField;




// InputField.tsx
import React, { useState, useMemo } from "react";
import type { ChangeEvent } from "react";
import type { InputFieldProps } from "./InputField.types";

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = "outlined",
  size = "md",
  type = "text",
  showClearButton = true,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseClasses =
    "w-full rounded-lg transition-colors duration-200 focus:outline-none";

  const sizeClasses = {
    sm: "text-sm h-9 px-3",
    md: "text-base h-11 px-4",
    lg: "text-lg h-14 px-5",
  };

  const variantClasses = {
    outlined:
      "border border-gray-300 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-400",
    filled:
      "border border-transparent bg-gray-100 dark:bg-gray-700 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 focus:border-blue-500",
    ghost:
      "border border-transparent bg-transparent focus:border-blue-500 dark:focus:border-blue-400",
  };

  const stateClasses = invalid
    ? "border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400"
    : disabled
    ? "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
    : "";

  const inputType = type === "password" && !showPassword ? "password" : "text";

  // handle clear input
  const handleClear = (e: React.MouseEvent) => {
    if (onChange) {
      onChange({
        ...e,
        target: { ...e.target, value: "" },
      } as ChangeEvent<HTMLInputElement>);
    }
  };

  const inputId = useMemo(
    () => `input-field-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          aria-invalid={invalid}
          aria-label={label}
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${stateClasses} ${
            (type === "password" || (showClearButton && value) || loading)
              ? "pr-10"
              : ""
          }`}
        />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
          {loading && (
            <span className="animate-spin text-gray-400 dark:text-gray-500">
              ⏳
            </span>
          )}

          {showClearButton && value && !disabled && !loading && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear input"
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              ✖
            </button>
          )}

          {type === "password" && !loading && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          )}
        </div>
      </div>

      {(helperText || errorMessage) && (
        <p
          className={`mt-1 text-xs ${
            invalid
              ? "text-red-500 dark:text-red-400"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {invalid ? errorMessage : helperText}
        </p>
      )}
    </div>
  );
};

export default InputField;

 