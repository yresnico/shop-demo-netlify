import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
function App() {
  const [productList, setProductList] = useState([]);
  const [inCart, setInCart] = useState(new Map());

  function addToCart(id, toAdd=1) {
      setInCart(prev => new Map([...prev, [id, (inCart.has(id)? inCart.get(id): 0) + toAdd]])) 
  }

  function removeFromCart(id) {
      const newCart = new Map([...inCart]);
      newCart.delete(id);
      setInCart(newCart);
  }

  useEffect(() => {
    const url =`https://dummyjson.com/products`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProductList(data.products);
      }).catch(err => {
        console.log(err)
      })
  }, [])
 
  // function buttonAction() {
  //   addToCart(1, 1);
  //   addToCart(2, 1)
  //   console.log(inCart);
  // }
 
  if(productList.length < 1) {
    return (
      <Navigation />
    )
  } 
 
  return (
    <>
      <Navigation 
      removeFromCart={removeFromCart} 
      addToCart={addToCart} 
      inCart={inCart} 
      productList={productList}/> 
    </>
  );
}

export default App;
 