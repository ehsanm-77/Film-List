import { createContext, useReducer } from 'react';
import { Context } from '../types/types';

const initState = {
  isSubmited: false,
  name: '',
  director: '',
  genre: '',
  productionDate: '',
  description: '',
  filmList: [],
  isEditing: false,
  findId: 0,
};

const reducer = (state: any, action: any) => {
  console.log('action.payload');

  switch (action.type) {
    case 'UPDATE-INPUT-VALUE':
      return { ...state, [action.payload.key]: action.payload.value };
    case 'SUBMIT-FORM':
      return {
        ...state,
        isSubmited: action.payload,
        name: '',
        director: '',
        genre: '',
        productionDate: '',
        description: '',
        isEditing: false,
      };
    case 'UPDATE-FILM-LIST':
      return {
        ...state,
        filmList: action.payload,
      };
    case 'EDIT-FILM':
      return {
        ...state,
        isEditing: true,
        findId: action.payload.id,
        name: action.payload.name,
        director: action.payload.director,
        genre: action.payload.genre,
        productionDate: action.payload.productionDate,
        description: action.payload.description,
      };
    default:
      return state;
  }
};
const initContext = {
  state: initState,
  dispatch: () => {
    console.log('');
  },
};
export const filmContext = createContext<Context>(initContext);
export const FilmProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initState, undefined);
  return (
    <>
      <filmContext.Provider value={{ state, dispatch }}>
        {children}
      </filmContext.Provider>
    </>
  );
};
