import { ToastContainer } from 'react-toastify';
import { Container } from './layout/Container/Container';
import 'react-toastify/dist/ReactToastify.css';
import { FilmProvider } from './context/FilmProvider';

function App() {
  return (
    <>
      {/* Wrap the app with FilmProvider to provide film context */}
      <FilmProvider>
        <Container /> {/* Render the main container component */}
      </FilmProvider>

      {/* ToastContainer for displaying toast notifications */}
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
