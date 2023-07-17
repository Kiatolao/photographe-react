import './index.css';

import { React} from 'react-router-dom';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layer from './components/layer.js';

function App() {
  return (
    <>
      <Layer />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
