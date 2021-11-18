import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// importa métodos da api
import * as api from './services/api';
import Search from './Components/Search';

function App() {
  api.getCategories()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <Search />
  );
}

export default App;
