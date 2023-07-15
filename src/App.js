import './index.css';
import React from 'react';
import Header from './components/Header';

import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
