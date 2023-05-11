import React, { useState } from 'react';
import { FilmsListProps } from '../../types/types';
import { ModalDesc } from '../Modal/DescModal/DescModal';

export const Films: React.FC<FilmsListProps> = ({
  filmList,
  handleDelete,
  handleEdit,
  setIsEditing,
  giveFilmId,
}) => {
  const [desc, setDesc] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleModalDesc = (desc: any) => {
    setDesc(desc);
    setIsOpen(true);
  };
  return (
    <>
      {filmList.map((film, index: any) => (
        <div
          key={film.id}
          className="grid grid-cols-8 py-3 items-center text-white"
        >
          <div className="text-center">{index + 1}</div>
          <div className="text-center">{film.name}</div>
          <div className="text-center">{film.director}</div>
          <div className="text-center">{film.genre}</div>
          <div className="text-center">{film.productionDate}</div>
          <div className="text-center ">
            <button
              onClick={() => handleModalDesc(film.description)}
              className="border border-blue-400 md:py-1 md:px-2 rounded-md hover:bg-blue-400"
            >
              توضیحات
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                handleEdit(film.id, film);
                setIsEditing(true);
                giveFilmId(film.id);
              }}
              className="border border-yellow-400 md:py-1 md:px-7 text-white rounded-md hover:bg-yellow-400"
            >
              ویرایش
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={() => handleDelete(film.id)}
              className="md:py-1 md:px-7 text-white rounded-md border border-red-400 hover:bg-red-400"
            >
              حذف
            </button>
          </div>
        </div>
      ))}
      <ModalDesc setIsOpen={setIsOpen} isOpen={isOpen} desc={desc} />
    </>
  );
};
