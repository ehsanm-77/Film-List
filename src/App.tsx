import { FilmForm, Header, FilmList } from './layout/index';
import { Isubmit } from './types/types';

function App({ fetchFilmsFromApi }: Isubmit) {
  return (
    <div className="w-full h-full">
      <Header />
      <FilmForm fetchFilmsFromApi={fetchFilmsFromApi} />
      <FilmList />
    </div>
  );
}

export default App;
