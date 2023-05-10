import { TextField } from '../../components';
import { films } from '../../library/axios/axios';
import { debounce } from 'lodash';
export const Header = ({ setFilmList }: any) => {
  const handleSearch = (e: any) => {
    console.log(e);
    films.get(`/films?q=${e}`).then((res) => {
      setFilmList(res.data);
    });
  };
  return (
    <>
      <div className="bg-[#f6c90e] flex justify-between items-center px-5">
        <div className="w-full text-3xl font-bold text-sky-900 mr-auto md:text-center ">
          اپلیکیشن فیلم
        </div>
        <TextField
          label={''}
          onChange={debounce(handleSearch, 1000)}
          placeholder={'جستجو ... '}
          className={
            'mb-5 border-search focus:border-blue-600 focus:outline-none'
          }
        />
      </div>
    </>
  );
};
