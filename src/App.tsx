import { useState } from 'react';
import { FilmForm, Header, FilmList } from './layout/index';

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const handleSubmited = (boolean: boolean) => {
    setIsSubmited(boolean);
  };
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <FilmForm handleSubmited={handleSubmited} isSubmited={isSubmited} />
        <FilmList isSubmited={isSubmited} />
      </div>
    </>
  );
}

export default App;
