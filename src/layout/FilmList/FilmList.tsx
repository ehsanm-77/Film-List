import { useContext, useEffect } from 'react';
import { films } from '../../library/axios/axios';
import { Films } from '../../components/Films/films';
import { filmContext } from '../../context/FilmProvider';

export const FilmList = ({ handleGetData }: any) => {
  const { state, dispatch } = useContext(filmContext);

  // Fetch films from the API
  const fetchFilmsFromApi = () => {
    films
      .get('/films')
      .then((res) => {
        dispatch({
          type: 'UPDATE-FILM-LIST',
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error('Failed to fetch films:', error);
      });
  };

  useEffect(() => {
    fetchFilmsFromApi();
  }, [state.isSubmited]); // Fetch films when isSubmitted changes

  const handleEdit = (film: any) => {
    if (film) {
      handleGetData(film);
    }
  };

  const handleFilter = (e: any) => {
    // Handle genre filtering
    console.log(e);
    e.target.value === 'همه'
      ? films.get(`/films`).then((res) => {
          dispatch({
            type: 'UPDATE-FILM-LIST',
            payload: res.data,
          });
        })
      : films.get(`/films?genre=${e.target.value}`).then((res) => {
          dispatch({
            type: 'UPDATE-FILM-LIST',
            payload: res.data,
          });
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
            className="bg-transparent border rounded-md ml-3 md:ml-10 px-2 py-1 text-slate-400 outline-none"
            name=""
            id=""
            onChange={handleFilter}
          >
            <option className="bg-[#595959]" value="همه">
              همه
            </option>
            <option className="bg-[#595959]" value="معمایی/هیجانی">
              معمایی/هیجانی
            </option>
            <option className="bg-[#595959]" value="اکشن/ماجراجویی">
              اکشن/ماجراجویی
            </option>
            <option className="bg-[#595959]" value="درام/عاشقانه">
              درام/عاشقانه
            </option>
          </select>
        </div>
      </div>

      <div className="md:p-10 text-sm md:text-lg overflow-x-auto">
        <div className="grid grid-cols-6 md:grid-cols-8 items-center text-white">
          <div className="text-center text-md hidden md:block md:text-xl">
            ردیف
          </div>
          <div className="text-center text-md md:text-xl">نام فیلم</div>
          <div className="text-center text-md md:text-xl hidden md:block">
            کارگردان
          </div>
          <div className="text-center text-md md:text-xl">ژانر فیلم</div>
          <div className="text-center text-xs md:text-xl">سال ساخت</div>
          <div className="text-center text-md md:text-xl">توضیحات</div>
          <div className="text-center text-md md:text-xl">ویرایش</div>
          <div className="text-center text-md md:text-xl">حذف</div>
        </div>
        <div className="flex justify-center mt-3 h-[2px] bg-white"></div>
        <div className="h-[240px] overflow-y-scroll">
          <Films handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};
