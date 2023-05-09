import { films } from '../../service/api/axios/axios';
import { SelectOption, TextField } from '../../components';
import { useState } from 'react';

export const FilmForm = ({ handleSubmited, isSubmited }: any) => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [productionDate, setProductionDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      director,
      genre,
      productionDate,
      description,
    };

    // Send a POST request to the /films endpoint with the form data
    films
      .post('/films', formData)
      .then((response) => {
        console.log(response);
        console.log('Film successfully saved');
        handleSubmited(!isSubmited);
        // Add the newly created film to the film list
        setName('');
        setDirector('');
        setGenre('');
        setProductionDate('');
        setDescription('');
      })
      .catch((error) => {
        // Handle error (e.g., show error message)
        console.error('Failed to save film:', error);
      });
  };
  const handleReset = () => {
    setName('');
    setDirector('');
    setGenre('');
    setProductionDate('');
    setDescription('');
  };

  return (
    <>
      <div className=" bg-[#515050]">
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 p-10 gap-12">
            <div className="flex flex-col gap-10">
              <TextField
                label={'نام فیلم'}
                value={name}
                onChange={setName}
                placeholder={'نام فیلم را بنویسید'}
                className={'p-1 rounded-md text-sm'}
              />
              <TextField
                label={'کارگران'}
                value={director}
                onChange={setDirector}
                placeholder={'نام کارگردان را وارد کنید'}
                className={'p-1 rounded-md text-sm'}
              />
            </div>
            <div className="flex flex-col gap-10">
              <SelectOption
                options={['وحشت/هیجانی', 'اکشن/ماجراجویی', 'درام/فانتزی']}
                value={genre}
                onChange={setGenre}
                label={'ژانر فیلم'}
              />
              <TextField
                label={'سال تولید'}
                value={productionDate}
                onChange={setProductionDate}
                placeholder={'سال ساخت فیلم را وارد کنید'}
                className={'rounded-md text-sm focus:bg-red-400'}
              />
            </div>
            <div className="col-span-2 flex flex-col justify-between h-full">
              <TextField
                label={'توضیحات'}
                value={description}
                onChange={setDescription}
                placeholder={'توضیحات درباره فیلم'}
                className={'!pb-12 text-sm'}
              />
              <div className="flex gap-3 w-full justify-end">
                <button
                  type="submit"
                  className="bg-yellow-400 py-1 px-7 text-black rounded-md border-none"
                >
                  ذخیره
                </button>
                <button
                  onClick={handleReset}
                  type="reset"
                  className="py-1 px-7 border rounded-md text-white"
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
