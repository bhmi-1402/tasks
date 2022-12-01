import Filter from './Filter';
import Product from './Product';
import Cart from './Cart';
import { useState } from 'react';
import AllProduct from './AllProducts';
import { Outlet, Route, Routes } from 'react-router';


export default function Store(prop) {

 
  return <>
    <div className="store">
      <Filter></Filter>
      <Outlet></Outlet>
      <Cart data={prop.cartItems}></Cart>
    </div>
  </>;
}
