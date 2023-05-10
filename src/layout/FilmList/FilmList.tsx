import { useEffect, useState } from 'react';
import { films } from '../../library/axios/axios';
import { Films } from '../../components/films/films';

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

  const handleDelete = (filmId: any) => {
    films
      .delete(`/films/${filmId}`)
      .then((res) => {
        console.log(res);
        // Remove the deleted film from the film list
        setFilmList((prevList: any) =>
          prevList.filter((film: any) => film.id !== filmId)
        );
      })
      .catch((error) => {
        console.error('Failed to delete film:', error);
      });
  };

  const handleEdit = (filmId: any) => {
    // Find the film object with the matching ID
    const film = filmList.find((film: any) => film.id === filmId);
    if (film) {
      // Populate the form inputs with the film data
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
    <div className="bg-[#595959] h-3/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white p-7">
          <div className="w-2 h-4 ml-2 bg-yellow-400 rounded-md"></div>
          <h2>لیست فیلم</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-white">فیلتر</div>
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
        <div className="h-[220px] overflow-y-scroll">
          <Films
            filmList={filmList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            setIsEditing={setIsEditing}
            giveFilmId={giveFilmId}
          />
        </div>
      </div>
    </div>
  );
};
