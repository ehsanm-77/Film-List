import React from 'react';
import { FilmsListProps } from '../../types/types';

export const FilmsList: React.FC<FilmsListProps> = ({ filmList }) => {
  return (
    <>
      {filmList.map((film) => (
        <div className="mt-5" key={film.id}>
          <div className="grid grid-cols-8 items-center text-white">
            <div className="text-center">{film.id}</div>
            <div className="text-center">{film.name}</div>
            <div className="text-center">{film.director}</div>
            <div className="text-center">{film.genre}</div>
            <div className="text-center">{film.productionDate}</div>
            <div className="text-center">
              <button className="border rounded-md border-blue-500 py-1 px-3">
                توضیحات
              </button>
            </div>
            <div className="text-center">
              <button className="border rounded-md border-yellow-500 py-1 px-3">
                ویرایش
              </button>
            </div>
            <div className="text-center">
              <button className="border rounded-md border-red-500 py-1 px-3">
                حذف
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
