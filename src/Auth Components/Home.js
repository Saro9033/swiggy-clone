import React from 'react'
import BottomMenu from '../Components/BottomMenu/BottomMenu'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'
import Router from '../Routers/router'

const Home = () => {
    const location = useLocation();

  return (
    <div>
        
      <>  <Header />
        <Router />
        {location.pathname === '/' && <Footer />}
        {location.pathname === '/Offers' && <Footer />}
        <BottomMenu /> </> 
    </div>
  )
}

export default Home