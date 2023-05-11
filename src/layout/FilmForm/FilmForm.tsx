import { useState } from 'react';
import { SelectOption, TextField } from '../../components';

export const FilmForm = ({
  name,
  director,
  genre,
  productionDate,
  description,
  setName,
  setDirector,
  setGenre,
  setProductionDate,
  setDescription,
  isEditing,
  handleSubmit,
  handleChange,
}: any) => {
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
        <form
          action=""
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 p-10 gap-12">
            <div className="flex flex-col gap-10">
              <TextField
                label={'نام فیلم'}
                value={name}
                onChange={setName}
                placeholder={'نام فیلم را بنویسید'}
                className={'p-1 rounded-md text-sm form-input'}
              />
              <TextField
                label={'کارگران'}
                value={director}
                onChange={setDirector}
                placeholder={'نام کارگردان را وارد کنید'}
                className={'p-1 rounded-md text-sm form-input'}
              />
            </div>
            <div className="flex flex-col gap-10">
              <SelectOption
                options={[
                  'لطفا ژانر را انتخاب کنید',
                  'معمایی/هیجانی',
                  'اکشن/ماجراجویی',
                  'درام/عاشقانه',
                ]}
                value={genre}
                onChange={setGenre}
                label={'ژانر فیلم'}
              />
              <TextField
                label={'سال تولید'}
                value={productionDate}
                onChange={setProductionDate}
                placeholder={'سال ساخت فیلم را وارد کنید'}
                className={'rounded-md text-sm form-input'}
              />
            </div>
            <div className="col-span-2 flex flex-col justify-between h-full">
              <TextField
                label={'توضیحات'}
                value={description}
                onChange={setDescription}
                placeholder={'توضیحات درباره فیلم'}
                className={'!pb-12 text-sm form-input'}
              />
              <div className="flex gap-3 w-full justify-center md:justify-end mt-4 md:mt-0">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-yellow-400 py-1 px-7 text-black rounded-md border-none"
                >
                  {!isEditing ? 'ذخیره' : 'ویرایش'}
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
