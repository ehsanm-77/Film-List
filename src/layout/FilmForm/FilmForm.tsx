import { useContext } from 'react';
import { SelectOption, TextField } from '../../components';
import { filmContext } from '../../context/FilmProvider';

// FilmForm component
export const FilmForm = ({ handleSubmit }: any) => {
  const { state, dispatch } = useContext(filmContext);

  // Handle input value changes
  const handleChange = ({ key, value }: any) => {
    dispatch({
      type: 'UPDATE-INPUT-VALUE',
      payload: {
        key: key,
        value: value,
      },
    });
  };

  // Handle form reset
  const handleReset = () => {
    dispatch({
      type: 'SUBMIT-FORM',
      payload: state.isSubmited,
    });
  };

  return (
    <>
      <div className="bg-[#515050]">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 p-10 gap-12">
            <div className="flex flex-col gap-10">
              {/* Text field for film name */}
              <TextField
                label={'نام فیلم'}
                value={state.name}
                onChange={(e) => {
                  handleChange({ key: 'name', value: e.target.value });
                }}
                placeholder={'نام فیلم را بنویسید'}
                className={'p-1 rounded-md text-sm form-input'}
              />

              {/* Text field for director */}
              <TextField
                label={'کارگران'}
                value={state.director}
                onChange={(e) => {
                  handleChange({ key: 'director', value: e.target.value });
                }}
                placeholder={'نام کارگردان را وارد کنید'}
                className={'p-1 rounded-md text-sm form-input'}
              />
            </div>

            <div className="flex flex-col gap-10">
              {/* Select option for film genre */}
              <SelectOption
                options={[
                  'لطفا ژانر را انتخاب کنید',
                  'معمایی/هیجانی',
                  'اکشن/ماجراجویی',
                  'درام/عاشقانه',
                ]}
                value={state.genre}
                onChange={(e) => {
                  handleChange({ key: 'genre', value: e.target.value });
                }}
                label={'ژانر فیلم'}
              />

              {/* Text field for production date */}
              <TextField
                label={'سال تولید'}
                value={state.productionDate}
                onChange={(e) => {
                  handleChange({
                    key: 'productionDate',
                    value: e.target.value,
                  });
                }}
                placeholder={'سال ساخت فیلم را وارد کنید'}
                className={'rounded-md text-sm form-input'}
              />
            </div>

            <div className="col-span-2 flex flex-col justify-between h-full">
              {/* Text field for film description */}
              <TextField
                label={'توضیحات'}
                value={state.description}
                onChange={(e) => {
                  handleChange({ key: 'description', value: e.target.value });
                }}
                placeholder={'توضیحات درباره فیلم'}
                className={'!pb-12 text-sm form-input'}
              />
              <div className="flex gap-3 w-full justify-center md:justify-end mt-4 md:mt-0">
                <button
                  type="submit"
                  className="bg-yellow-400 py-1 px-7 text-black rounded-md border-none"
                >
                  {!state.isEditing ? 'ذخیره' : 'ویرایش'}
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
