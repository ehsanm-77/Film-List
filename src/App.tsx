import { FilmForm, Header, FilmList } from './layout/index';

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <FilmForm />
        <FilmList />
      </div>
    </>
  );
}

export default App;
