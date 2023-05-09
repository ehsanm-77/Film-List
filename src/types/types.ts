import { AxiosResponse } from 'axios';

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

interface Film {
  id: number;
  name: string;
  director: string;
  genre: string;
  productionDate: string;
}

export interface FilmsListProps {
  filmList: Film[];
}
export type OnFilmAddedCallback = {
  OnFilmAdded: (film: Film) => void;
};
export type Isubmit = {
  e: React.FormEvent;
  fetchFilms: () => void;
};
export type FetchFilmsFn = () => Promise<AxiosResponse<Film[]>>;
