import React, { ChangeEvent } from 'react';
import { SelectOptionProps } from '../../../types/types';

export const SelectOption: React.FC<SelectOptionProps> = ({
  options,
  value,
  onChange,
  label,
}: SelectOptionProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <div className="w-2 h-4 ml-1 bg-yellow-400 rounded-md"></div>
          <label style={{ color: 'white' }}>{label}</label>
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
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option
              className="bg-[#515050] option-form"
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
