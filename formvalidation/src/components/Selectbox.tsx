import React, { forwardRef } from 'react'

type SelectboxProps = {
  label: string;
  options?: { value: string; label: string }[];
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Selectbox = forwardRef<HTMLSelectElement, SelectboxProps>(
  ({ label, options = [], className = "", ...props }, ref) => {
    return (
      <div className="mb-5">
        <label className="block text-gray-700 text-md font-bold mb-1">
          {label}
        </label>
        <select
          ref={ref}
          {...props}
          className={`shadow border-gray-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
        >
          <option value="">Choose Pet</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Selectbox.displayName = 'Selectbox';

export default Selectbox
