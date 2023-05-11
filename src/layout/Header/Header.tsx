import { useContext } from 'react';
import { TextField } from '../../components';
import { films } from '../../library/axios/axios';
import { debounce } from 'lodash';
import { filmContext } from '../../context/FilmProvider';

export const Header = () => {
  const { dispatch } = useContext(filmContext);

  const handleSearch = (e: any) => {
    console.log(e.target.value);
    e.target.value !== ''
      ? films.get(`/films?q=${e.target.value}`).then((res) => {
          dispatch({
            type: 'UPDATE-FILM-LIST',
            payload: res.data,
          });
        })
      : films.get(`/films`).then((res) => {
          dispatch({
            type: 'UPDATE-FILM-LIST',
            payload: res.data,
          });
        });
  };
  return (
    <>
      <div className="bg-[#f6c90e] flex justify-between items-center px-5">
        <div className="w-full text-3xl font-bold text-sky-900 mr-auto md:mr-28 md:text-center ">
          اپلیکیشن فیلم
        </div>
        <TextField
          label={''}
          onChange={debounce(handleSearch, 1000)}
          placeholder={'جستجو ... '}
          className={'mb-5 border-search md:ml-10'}
        />
      </div>
    </>
  );
};
