import logo from './logo.svg';
import './App.css';
import Header from './Components/About/Header';
import './responsive.css';

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Store from './Components/Store/Store';
import Contact from './Components/contact/Contact';
import Product from './Components/Store/Product';
import AllProduct from './Components/Store/AllProducts';
import NotFound from './Components/About/NotFound';
import ContactInfo from './Components/contact/ContactInfo'
import Journey from './Components/Journey/Journey';

function App() {

 const [cartItems, SetItem] = useState([]);

  return (<>
    <BrowserRouter>
    <Header></Header>
   
      <Routes>
        <Route path='/notfound' element={<NotFound></NotFound>}></Route>
        <Route path="/store" element={<Store cartItems={cartItems}></Store>}>
          <Route path="products" element={<Product func={SetItem} det={cartItems}></Product>}></Route>
          <Route  index element={<AllProduct></AllProduct>}></Route>
        </Route>
        <Route path="/" element={<Navigate to="/store" replace/>} />
        <Route path="*" element={<Navigate to="/notfound" replace/>} />
        <Route path="/team" element={<Contact></Contact>}></Route>
        <Route path="/contact" element={<ContactInfo></ContactInfo>}></Route>
        <Route path="/journey" element={<Journey></Journey>}></Route>
      
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
