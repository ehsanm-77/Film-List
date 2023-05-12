import React, { useContext, useState } from 'react';
import { FilmsListProps } from '../../types/types';
import { ModalDesc } from '../Modal/DescModal/DescModal';
import { films } from '../../library/axios/axios';
import { toast } from 'react-toastify';
import { ModalDelete } from '../Modal/DeleteModal/DeleteModal';
import { filmContext } from '../../context/FilmProvider';

export const Films: React.FC<FilmsListProps> = ({ handleEdit }) => {
  const [desc, setDesc] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const { state, dispatch } = useContext(filmContext);
  console.log(state);
  const handleModalDesc = (desc: any) => {
    setDesc(desc);
    setIsOpen(true);
  };

  const handleModalDelete = (filmId: any) => {
    setDeleteId(filmId);
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    films
      .delete(`/films/${deleteId}`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: 'UPDATE-FILM-LIST',
          payload: state.filmList.filter((film: any) => film.id !== deleteId),
        });
        toast.success('حذف فیلم با موفقیت انجام شد');
      })
      .catch((error) => {
        console.error('Failed to delete film:', error);
      });
  };

  return (
    <>
      {state.filmList.map((film: any, index: any) => (
        <div
          key={film.id}
          className="grid grid-cols-6 md:grid-cols-8 py-3 items-center text-white "
        >
          <div className="text-center hidden md:block text-md md:text-xl">
            {index + 1}
          </div>
          <div className="text-center text-md md:text-xl">{film.name}</div>
          <div className="text-center text-md md:text-xl hidden md:block">
            {film.director}
          </div>
          <div className="text-center text-md md:text-xl">{film.genre}</div>
          <div className="text-center text-md md:text-xl">
            {film.productionDate}
          </div>
          <div className="text-center text-md flex justify-center md:text-xl">
            <img
              src="../../../src/assets/img/description.svg"
              alt=""
              onClick={() => handleModalDesc(film.description)}
              className="w-7"
            />
          </div>

          <div className="text-center text-xs md:text-xl flex justify-center">
            <img
              src="../../../src/assets/img/edit.svg"
              alt=""
              onClick={() => {
                handleEdit(film);
              }}
              className="w-7"
            />
          </div>
          <div className="text-center flex justify-center">
            <img
              src="../../../src/assets/img/delete.svg"
              alt=""
              className="w-7"
              onClick={() => {
                handleModalDelete(film.id);
              }}
            />
          </div>
        </div>
      ))}
      <ModalDesc setIsOpen={setIsOpen} isOpen={isOpen} desc={desc} />
      <ModalDelete
        handleDelete={handleDelete}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </>
  );
};
