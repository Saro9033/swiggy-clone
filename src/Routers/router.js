import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'
import Search from '../Components/Search'
import Offers from '../Components/Offers'
import Cart from '../Components/Cart/Cart'
import Restaurants from '../Components/Restaurants'
import Account from '../Components/Account'

const Router = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/offers' element={<Offers />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/restaurants/:id' element={<Restaurants />}></Route>
        <Route path='/account' element={<Account />}> </Route>
      </Routes>

    </div>
  )
}

export default Router