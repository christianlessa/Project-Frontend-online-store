import React from 'react';
import CartButton from '../Components/CartButton';
import Search from '../Components/Search';
import Categories from '../Components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <CartButton />
        <Categories />
      </div>
    );
  }
}

export default Home;
