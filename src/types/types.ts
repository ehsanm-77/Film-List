// Inputs (with type)
export type Iinput = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className: string;
};
// Buttons
export type Ibutton = {
  label: string;
  className: string;
  onClick: () => void;
  type: string;
  // handleSubmit: () => void;
};
// Select Options (with interface)
export interface SelectOptionProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

//..........//

export type Isubmit = {
  fetchFilmsFromApi: () => void;
};
