import React from 'react';
import { FilmsListProps } from '../../types/types';

export const FilmsList: React.FC<FilmsListProps> = ({
  filmList,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      {filmList.map((film, index: any) => (
        <div key={film.id} className="grid grid-cols-8 items-center text-white">
          <div className="text-center">{index + 1}</div>
          <div className="text-center">{film.name}</div>
          <div className="text-center">{film.director}</div>
          <div className="text-center">{film.genre}</div>
          <div className="text-center">{film.productionDate}</div>
          <div className="text-center">{film.description}</div>
          <div className="text-center">
            <button
              onClick={() => handleEdit(film.id, { name: 'Updated Name' })}
              className="bg-green-500 py-1 px-7 text-white rounded-md border-none"
            >
              ویرایش
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={() => handleDelete(film.id)}
              className="bg-red-500 py-1 px-7 text-white rounded-md border-none"
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
