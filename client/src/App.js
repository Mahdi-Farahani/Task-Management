//utils
import {lazy, Suspense} from 'react';
import {Provider} from 'react-redux';
import {ToastContainer, Slide} from 'react-toastify';
import store from './redux';
import 'react-toastify/dist/ReactToastify.css';
//styles
import 'antd/dist/antd.min.css';
import SpinnerLoading from 'components/SpinnerLoading';
//components
const Home = lazy(() => import('screens/Home'));

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        theme='colored'
        autoClose={3000}
        hideProgressBar
        closeOnClick
        transition={Slide}
      />
      <Suspense fallback={<SpinnerLoading />}>
        <Home />
      </Suspense>
    </Provider>
  );
}

export default App;
