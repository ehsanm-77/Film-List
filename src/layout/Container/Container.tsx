import { useState } from 'react';
import { FilmForm, FilmList, Header } from '..';
import { films } from '../../library/axios/axios';
import { toast } from 'react-toastify';

export const Container = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [name, setName] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [productionDate, setProductionDate] = useState('');
  const [description, setDescription] = useState('');
  const [filmList, setFilmList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [findId, setFindId] = useState(null);
  const handleSubmited = (boolean: boolean) => {
    setIsSubmited(boolean);
  };

  const giveFilmId = (filmId: any) => {
    const filmid = filmList.find((film: any) => filmId === film.id);
    setFindId(filmid.id);
    console.log(filmid.id);
    return filmid;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEditing) {
      // Create an object with the form data
      const formData = {
        name,
        director,
        genre,
        productionDate,
        description,
      };
      films
        .post('/films', formData)
        .then((response) => {
          console.log(response);
          console.log('Film successfully saved');
          handleSubmited(!isSubmited);
          setName('');
          setDirector('');
          setGenre('');
          setProductionDate('');
          setDescription('');
          toast.success('افزودن کاربر با موفقیت انجام شد');
        })
        .catch((error) => {
          console.error('Failed to save film:', error);
        });
    } else if (isEditing) {
      const formData = {
        name,
        director,
        genre,
        productionDate,
        description,
      };

      films
        .put(`/films/${findId}`, formData) // Use filmId in the URL
        .then((response) => {
          console.log(response);
          console.log('Film successfully updated');
          handleSubmited(!isSubmited);
          setName('');
          setDirector('');
          setGenre('');
          setProductionDate('');
          setDescription('');
          setIsEditing(false);
          toast.info('ویرایش با موفقیت انجام شد');
        })
        .catch((error) => {
          console.error('Failed to update film:', error);
        });
    }
  };

  const handleEdit = (film: any) => {
    setName(film.name);
    setDirector(film.director);
    setGenre(film.genre);
    setProductionDate(film.productionDate);
    setDescription(film.description);
  };

  return (
    <>
      <div className="w-full h-full">
        <Header filmList={filmList} setFilmList={setFilmList} />
        <FilmForm
          handleSubmited={handleSubmited}
          isSubmited={isSubmited}
          name={name}
          setName={setName}
          director={director}
          setDirector={setDirector}
          genre={genre}
          setGenre={setGenre}
          productionDate={productionDate}
          setProductionDate={setProductionDate}
          description={description}
          setDescription={setDescription}
          handleEdit={handleEdit}
          setFilmList={setFilmList}
          filmList={filmList}
          isEditing={isEditing}
          handleSubmit={handleSubmit}
        />
        <FilmList
          isSubmited={isSubmited}
          name={name}
          setName={setName}
          director={director}
          setDirector={setDirector}
          genre={genre}
          setGenre={setGenre}
          productionDate={productionDate}
          setProductionDate={setProductionDate}
          description={description}
          setDescription={setDescription}
          setFilmList={setFilmList}
          filmList={filmList}
          handleEdit={handleEdit}
          setIsEditing={setIsEditing}
          giveFilmId={giveFilmId}
        />
      </div>
    </>
  );
};
