// import type { ChangeEvent } from "react";

// export interface InputFieldProps {
//   value?: string;
//   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
//   label?: string;
//   placeholder?: string;
//   helperText?: string;
//   errorMessage?: string;
//   disabled?: boolean;
//   invalid?: boolean;
//   variant?: "filled" | "outlined" | "ghost";
//   size?: "sm" | "md" | "lg";
//   type?: "text" | "password";
//   showClearButton?: boolean;
// }



// InputField.types.ts
import type { ChangeEvent } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  showClearButton?: boolean;
  className?: string;
}
