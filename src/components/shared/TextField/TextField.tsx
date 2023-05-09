import { ChangeEvent } from 'react';
import { Iinput } from '../../../types/types';

export const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  className,
}: Iinput) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <div className="w-2 h-4 ml-1 bg-yellow-400 rounded-md"></div>
        <label style={{ color: 'white' }}>{label}</label>
      </div>
      <input
        style={{
          color: 'white',
          backgroundColor: 'transparent',
          border: '1px solid white',
          borderRadius: '5px',
          padding: '8px',
        }}
        className={className}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
