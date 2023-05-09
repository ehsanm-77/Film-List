import React, { useEffect, useState } from 'react';
import { films } from '../../service/api/axios/axios';
import { FilmsList } from '../../components/cart/cart';
import { Isubmit } from '../../types/types';

export const FilmList = () => {
  const [filmList, setFilmList] = useState([]);

  const fetchFilmsFromApi = () => {
    films
      .get('/films')
      .then((res) => {
        setFilmList(res.data);
      })
      .catch((error) => {
        console.error('Failed to fetch films:', error);
      });
  };

  useEffect(() => {
    fetchFilmsFromApi(); // Call the renamed local function
  }, []);

  useEffect(() => {
    fetchFilmsFromApi();
  }, [filmList]);

  return (
    <div className="bg-[#595959] h-full">
      <div className="flex items-center text-white p-7">
        <div className="w-2 h-4 ml-2 bg-yellow-400 rounded-md"></div>
        <h2>لیست فیلم</h2>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-8 items-center text-white">
          <div className="text-center">ردیف</div>
          <div className="text-center">نام فیلم</div>
          <div className="text-center">کارگردان</div>
          <div className="text-center">ژانر فیلم</div>
          <div className="text-center">سال ساخت</div>
          <div className="text-center">توضیحات</div>
          <div className="text-center">ویرایش</div>
          <div className="text-center">حذف</div>
        </div>
        <div className="flex justify-center mt-3 h-[2px] bg-white"></div>
        <FilmsList filmList={filmList} />
      </div>
    </div>
  );
};
