import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Cart from './components/Cart/Cart';
import Promo from './components/Promo/Promo';

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCartHandler = product => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <>
      <Header></Header>
      <Promo></Promo>
      <main className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Players addToCartHandler={addToCartHandler}></Players>
            </div>
            <div className="col-lg-3">
              <Cart cart={cart}></Cart>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
