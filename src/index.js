import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Portfolio from './Routes/Portfolio';
import Accueil from './Routes/Accueil';
import Tarifs from './Routes/Tarifs';
import Contact from './Routes/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children :[
      {
        path : "portfolio",
        element :<Portfolio/>
      },
      {
        path : "accueil",
        element :<Accueil/>
      },
      {
        path : "tarifs",
        element :<Tarifs/>
      },
      {
        path : "contact",
        element :<Contact/>
      },

    ]
  }
  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

