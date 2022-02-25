import {lazy, Suspense} from 'react';
import {Provider} from 'react-redux';
import {ToastContainer, Slide} from 'react-toastify';
import store from './redux/store';
import persistor from './redux/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import {Spin} from 'antd';
const Home = lazy(() => import('screens/Home'));

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ToastContainer
          theme='colored'
          autoClose={3000}
          hideProgressBar
          closeOnClick
          transition={Slide}
        />
        <Suspense fallback={<Spin />}>
          <Home />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
