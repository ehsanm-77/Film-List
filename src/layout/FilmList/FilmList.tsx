import { useEffect, useState } from 'react';
import { films } from '../../library/axios/axios';
import { Films } from '../../components/Films/films';
import { toast } from 'react-toastify';

export const FilmList = ({
  isSubmited,
  setFilmList,
  filmList,
  setName,
  setGenre,
  setDescription,
  setDirector,
  setProductionDate,
  setIsEditing,
  giveFilmId,
}: any) => {
  const fetchFilmsFromApi = () => {
    films
      .get('/films')
      .then((res) => {
        console.log(res.data);
        setFilmList(res.data);
      })
      .catch((error) => {
        console.error('Failed to fetch films:', error);
      });
  };
  console.log(filmList);

  useEffect(() => {
    fetchFilmsFromApi();
  }, [isSubmited]);

  const handleEdit = (filmId: any) => {
    const film = filmList.find((film: any) => film.id === filmId);
    if (film) {
      setName(film.name);
      setDirector(film.director);
      setGenre(film.genre);
      setProductionDate(film.productionDate);
      setDescription(film.description);
    }
  };
  const handleFilter = (e: any) => {
    console.log(e);
    e.target.value === 'همه'
      ? films.get(`/films`).then((res) => {
          setFilmList(res.data);
        })
      : films.get(`/films?genre=${e.target.value}`).then((res) => {
          setFilmList(res.data);
        });
  };
  return (
    <div className="bg-[#595959] h-[443px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white p-7">
          <div className="w-2 h-4 ml-2 bg-yellow-400 rounded-md"></div>
          <h2>لیست فیلم</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-white">فیلتر :</div>
          <select
            className="bg-transparent border rounded-md ml-10 px-2 py-1 text-slate-400 outline-none"
            name=""
            id=""
            onChange={handleFilter}
          >
            <option className="bg-[#595959]" value="همه">
              همه
            </option>
            <option className="bg-[#595959]" value="وحشت/هیجانی">
              وحشت/هیجانی
            </option>
            <option className="bg-[#595959]" value="اکشن/ماجراجویی">
              اکشن/ماجراجویی
            </option>
            <option className="bg-[#595959]" value="درام/فانتزی">
              درام/فانتزی
            </option>
          </select>
        </div>
      </div>

      <div className="md:p-10 text-sm md:text-lg">
        <div className="grid grid-cols-8 items-center text-white">
          <div className="text-center text-xs md:text-xl">ردیف</div>
          <div className="text-center text-xs md:text-xl">نام فیلم</div>
          <div className="text-center text-xs md:text-xl">کارگردان</div>
          <div className="text-center text-xs md:text-xl">ژانر فیلم</div>
          <div className="text-center text-xs md:text-xl">سال ساخت</div>
          <div className="text-center text-xs md:text-xl">توضیحات</div>
          <div className="text-center text-xs md:text-xl">ویرایش</div>
          <div className="text-center text-xs md:text-xl">حذف</div>
        </div>
        <div className="flex justify-center mt-3 h-[2px] bg-white"></div>
        <div className="h-[240px] overflow-y-scroll">
          <Films
            filmList={filmList}
            handleEdit={handleEdit}
            setIsEditing={setIsEditing}
            giveFilmId={giveFilmId}
            setFilmList={setFilmList}
          />
        </div>
      </div>
    </div>
  );
};
