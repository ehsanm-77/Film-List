// Inputs (with type)
export type IInput = {
  label: string; // Label for the input
  value: string; // Current value of the input
  onChange: () => void; // Event handler for input change
  placeholder: string; // Placeholder text for the input
  className: string; // CSS class name for styling
};

// Buttons
export type IButton = {
  label: string; // Label for the button
  className: string; // CSS class name for styling
  onClick: () => void; // Event handler for button click
  type: string; // Type attribute of the button
};

// Select Options (with interface)
export interface SelectOptionProps {
  options: string[]; // List of options for the select element
  value: string; // Selected value
  onChange: (value: string) => void; // Event handler for option change
  label: string; // Label for the select element
}

// Submit (with interface)
export type ISubmit = {
  fetchFilmsFromApi: () => void; // Function to fetch films from API
};

// Film interface
export interface Film {
  id: string; // ID of the film
  name: string; // Name of the film
  director: string; // Director of the film
  genre: string; // Genre of the film
  productionDate: string; // Production date of the film
  description: string; // Description of the film
}

// FilmsListProps interface
export interface FilmsListProps {
  filmList: Film[]; // List of films
  handleDelete: (filmId: string) => void; // Function to handle film deletion
  handleEdit: (films: any) => void; // Function to handle film editing
  giveFilmId: (filmId: string) => void; // Function to provide film ID
  setIsEditing: any; // Setter function for editing flag
  setFilmList: (list: any) => void; // Setter function for film list
}

// FilmInfo type
export type FilmInfo = {
  id: number; // ID of the film
  name: string; // Name of the film
  genre: string; // Genre of the film
  director: string; // Director of the film
  productionDate: string; // Production date of the film
  description: string; // Description of the film
};

// Context type
export type Context = {
  state: any; // State object
  dispatch: React.Dispatch<any>; // Dispatch function
};
