import React from 'react';
import { SelectOptionProps } from '../../../types/types';

// SelectOption component
export const SelectOption: React.FC<SelectOptionProps> = ({
  options, // Array of available options for the select
  value, // Current selected value
  onChange, // Function called when select value changes
  label, // Select label
}: SelectOptionProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <div className="w-2 h-4 ml-1 bg-yellow-400 rounded-md"></div>{' '}
          {/* Colored marker */}
          <label style={{ color: 'white' }}>{label}</label> {/* Select label */}
        </div>
        <select
          style={{
            fontSize: '14px',
            color: 'white',
            backgroundColor: 'transparent',
            border: '1px solid white',
            borderRadius: '5px',
            padding: '5px',
          }}
          value={value} // Set selected value
          onChange={onChange} // Handle select value changes
        >
          {options.map((option) => (
            <option
              className="bg-[#515050] option-form" // Custom CSS class for options
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
