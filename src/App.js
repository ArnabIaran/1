import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Sidebar from './Sidebar'
import ProductList from './ProductList'
import Footer from './Footer'


function App() {
  const [products,setProducts] = useState([
    {id:"1", name:  "shirt", thumb:"shirt.png", price:"100"},
    {id:"2", name:  "sweater", thumb:"sweater.png", price:"50"},
    {id:"3", name:  "scarf", thumb:"scarf.png", price:"300"},
    {id:"4", name:  "suit", thumb:"suit.png", price:"250"},
    {id:"5", name:  "Polo shirt", thumb:"polo.png", price:"350"},
    {id:"6", name:  "Hoodies", thumb:"hoodies.png", price:"400"},
    {id:"7", name:  "T-shirts", thumb:"tshirt.png", price:"100"},
    {id:"8", name:  "Shorts", thumb:"shorts.png", price:"150"},
    {id:"9", name:  "Coat", thumb:"coat.png", price:"120"},
    {id:"10", name:  "Swim suit", thumb:"swimsuit.png", price:"50"},
    {id:"11", name:  "Leather jacket", thumb:"leatherjacket.png", price:"70"},
    {id:"12", name:  "Jeans", thumb:"jeans.png", price:"90"},
    {id:"13", name:  "Hawaiian Shirt", thumb:"hawaiian.png", price:"199"},
    {id:"14", name:  "Cardigan", thumb:"cardigan.png", price:"299"},
    {id:"15", name:  "Jumper", thumb:"jumper.png", price:"99"},
    {id:"16", name:  "Blazer", thumb:"blazor.png", price:"99"},
    {id:"17", name:  "Trench coat", thumb:"trench.png", price:"49"},
    {id:"18", name:  "Cargo pants", thumb:"cargo.png", price:"59"},
    {id:"19", name:  "Bath robe", thumb:"bathrobes.png", price:"80"},
    {id:"20", name:  "Sheath Dress", thumb:"sheath.png", price:"149"},
  ]);
  return (
    <div className="App">
      <Sidebar />
      <ProductList products={products}/>
      <Footer />
    </div>
  );
}

export default App;
