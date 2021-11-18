import React from 'react';
import CartButton from '../Components/CartButton';
import Search from '../Components/Search';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <CartButton />
      </div>
    );
  }
}

export default Home;
