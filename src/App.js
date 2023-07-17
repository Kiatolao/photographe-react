import './index.css';
import { React, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layer from './components/layer.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Layer />
      <Header />
      <Outlet />
    </BrowserRouter>

    </>
  );
}

export default App;
