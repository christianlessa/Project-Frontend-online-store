import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// importa métodos da api
import * as api from './services/api';
import Routes from './Components/Routes';

function App() {
  api.getCategories()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (

    <BrowserRouter>
      <Routes />

    </BrowserRouter>

  );
}

export default App;
