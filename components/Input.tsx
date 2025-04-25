import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...props}
          className="w-full border border-gray-300 bg-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
