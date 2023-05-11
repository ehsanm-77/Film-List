import { IButton } from '../../../types/types';

// Button component
export const Button = ({ label }: IButton) => {
  return <button>{label}</button>;
};
