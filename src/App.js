import './index.css';

import { Navigate, React, Outlet} from 'react-router-dom';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layer from './components/layer.js';

function App() {
  return (
    <>
    {/* Redirection vers la page d'accueil */}
      <Navigate from="/" to="/accueil" />
      <Layer />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
