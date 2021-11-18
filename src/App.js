import React from 'react';
import './App.css';
import * as api from './services/api';
import Search from './Components/Search';
import Categories from './Components/Categories';

function App() {
  api
    .getCategories()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <Search />
      <Categories />
    </>
  );
}

export default App;
