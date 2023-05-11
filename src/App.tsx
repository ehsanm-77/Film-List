import { ToastContainer } from 'react-toastify';
import { Container } from './layout/Container/Container';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Container />
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
