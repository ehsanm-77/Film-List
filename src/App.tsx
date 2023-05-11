import { ToastContainer } from 'react-toastify';
import { Container } from './layout/Container/Container';
import 'react-toastify/dist/ReactToastify.css';
import { FilmProvider } from './context/FilmProvider';

function App() {
  return (
    <>
      <FilmProvider>
        <Container />
      </FilmProvider>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
