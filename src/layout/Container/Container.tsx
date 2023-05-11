import { useContext } from 'react';
import { FilmForm, FilmList, Header } from '..';
import { films } from '../../library/axios/axios';
import { toast } from 'react-toastify';
import { filmContext } from '../../context/FilmProvider';

export const Container = () => {
  const { state, dispatch } = useContext(filmContext);

  const handleSubmit = () => {
    // Validate form fields
    if (
      !state.name ||
      !state.director ||
      state.genre === 'لطفا ژانر را انتخاب کنید' ||
      !state.genre ||
      !state.productionDate ||
      !state.description
    ) {
      toast.error('لطفا همه ی فیلد ها را پر کنید');
      return;
    }

    if (!state.isEditing) {
      // Create a new film
      const formData = {
        name: state.name,
        director: state.director,
        genre: state.genre,
        productionDate: state.productionDate,
        description: state.description,
      };

      films
        .post('/films', formData)
        .then((response) => {
          console.log(response);
          console.log('Film successfully saved');
          dispatch({
            type: 'SUBMIT-FORM',
            payload: !state.isSubmited,
          });
          toast.success(` فیلم ${response.data.name} با موفقیت اضافه شد`);
        })
        .catch((error) => {
          console.error('Failed to save film:', error);
        });
    } else if (state.isEditing) {
      // Update an existing film
      const formData = {
        name: state.name,
        director: state.director,
        genre: state.genre,
        productionDate: state.productionDate,
        description: state.description,
      };

      films
        .put(`/films/${state.findId}`, formData)
        .then((response) => {
          console.log(response);
          console.log('Film successfully updated');
          dispatch({
            type: 'SUBMIT-FORM',
            payload: !state.isSubmited,
          });
          toast.success('ویرایش با موفقیت انجام شد');
        })
        .catch((error) => {
          console.error('Failed to update film:', error);
        });
    }
  };

  const handleEdit = (film: any) => {
    // Set the selected film for editing
    dispatch({
      type: 'EDIT-FILM',
      payload: {
        id: film.id,
        name: film.name,
        genre: film.genre,
        director: film.director,
        productionDate: film.productionDate,
        description: film.description,
      },
    });
  };

  return (
    <>
      <div className="w-full h-full">
        <Header /> {/* Render the header component */}
        <FilmForm handleEdit={handleEdit} handleSubmit={handleSubmit} />{' '}
        {/* Render the film form component */}
        <FilmList handleGetData={handleEdit} />{' '}
        {/* Render the film list component */}
      </div>
    </>
  );
};
