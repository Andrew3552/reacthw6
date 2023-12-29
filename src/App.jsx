import { Routes, Route } from 'react-router-dom'
import React from 'react'

import MainProduct from './components/Main/MainProduct/MainProduct';
import FavoritePage from './Pages/FavoritePage/FavoritePage';
import CartPage from './Pages/CartPage/CartPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import Layout from './components/Layout/Layout';

import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route path='/' element={ <MainProduct /> } />
          <Route path='/favorite' element={ <FavoritePage /> } />
          <Route path='/cart' element={ <CartPage /> } />
          <Route path='/order' element={ <OrderConfirm /> } />
          <Route path="*" element={ <NotFoundPage /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
