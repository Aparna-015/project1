import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Productlist from './Components/Productlist';
import Cartlist from './Components/Cartlist';

function App() {
  const [product, setProduct] = useState([
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup - Red Color',
      category: 'Cup',
      seller: 'SBS Ltd',
      price: 100
    },
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])
  const[cart,setCart]=useState([])
  const[showCart,setShowcart]=useState(false)

  const addtocart=(dta)=>{
    console.log(dta)
    setCart([...cart,{...dta, qty: 1}])
  }
  const handleshow=(value)=>{

    setShowcart(value)
  }
  return (
    <div className="App">
      <Header count={cart.length} 
      handleshow={handleshow}/>
      {
        showCart?
      
      <Cartlist cart={cart}/> :

      <Productlist product={product} addtocart={addtocart}/>
        
    }
    </div>
  );
}

export default App;
