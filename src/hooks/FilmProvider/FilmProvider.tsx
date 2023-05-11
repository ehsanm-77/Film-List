import React, { createContext, useReducer } from 'react';

// Define initial state
const initialState = {
  isSubmited: false,
  name: '',
  director: '',
  genre: '',
  productionDate: '',
  description: '',
  filmList: [],
  isEditing: false,
  findId: null,
};

// Create reducer function
const filmReducer = ({ state, action }: any) => {
  switch (action.type) {
    case 'SET_IS_SUBMITED':
      return {
        ...state,
        isSubmited: action.payload,
      };
    case 'SET_FORM_DATA':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'SET_FILM_LIST':
      return {
        ...state,
        filmList: action.payload,
      };
    case 'SET_IS_EDITING':
      return {
        ...state,
        isEditing: action.payload,
      };
    case 'SET_FIND_ID':
      return {
        ...state,
        findId: action.payload,
      };
    default:
      return state;
  }
};

// Create context
export const FilmContext = createContext();

// Create context provider component
export const FilmProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(filmReducer, initialState);

  return (
    <FilmContext.Provider value={{ state, dispatch }}>
      {children}
    </FilmContext.Provider>
  );
};
