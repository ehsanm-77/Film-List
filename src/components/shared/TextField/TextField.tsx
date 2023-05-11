import { Iinput } from '../../../types/types';

// TextField component
export const TextField = ({
  label, // Input label
  value, // Current value of the input
  onChange, // Function called when input value changes
  placeholder, // Placeholder text for the input
  className, // CSS class for the input element
}: Iinput) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <div className="w-2 h-4 ml-1 bg-yellow-400 rounded-md"></div>{' '}
        {/* Colored marker */}
        <label style={{ color: 'white' }}>{label}</label> {/* Input label */}
      </div>
      <input
        style={{
          color: 'white',
          backgroundColor: 'transparent',
          border: '1px solid white',
          borderRadius: '5px',
          padding: '8px',
        }}
        className={className} // Apply custom CSS class if provided
        type="text"
        value={value} // Set input value
        onChange={onChange} // Handle input value changes
        placeholder={placeholder} // Placeholder text for the input
      />
    </div>
  );
};
