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
          className="grid grid-cols-8 py-3 items-center text-white"
        >
          <div className="text-center text-xs md:text-xl">{index + 1}</div>
          <div className="text-center text-xs md:text-xl">{film.name}</div>
          <div className="text-center text-xs md:text-xl">{film.director}</div>
          <div className="text-center text-xs md:text-xl">{film.genre}</div>
          <div className="text-center text-xs md:text-xl">
            {film.productionDate}
          </div>
          <div className="text-center text-xs md:text-xl">
            <button
              onClick={() => handleModalDesc(film.description)}
              className="border border-blue-400 md:py-1 md:px-2 rounded-md hover:bg-blue-400"
            >
              توضیحات
            </button>
          </div>

          <div className="text-center text-xs md:text-xl">
            <button
              onClick={() => {
                handleEdit(film);
              }}
              className="border border-yellow-400 md:py-1 md:px-7 text-white rounded-md hover:bg-yellow-400"
            >
              ویرایش
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                handleModalDelete(film.id);
              }}
              className="md:py-1 md:px-7 text-white rounded-md border border-red-400 hover:bg-red-400"
            >
              حذف
            </button>
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
