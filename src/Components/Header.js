import React, { useContext, useState } from 'react'
import Logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import Login from '../Auth Components/Login';
import SignUp from '../Auth Components/SignUp';
import { useUserAuth } from '../Context/UserAuthContext';

const Header = () => {
    const navigate = useNavigate()
    const { place, placed, selectedItems, viewSignIn, setViewSignIn, isOffcanvasVisible, setIsOffcanvasVisible } = useContext(MyContext)
    const styles = {
        proximaNova: {
            fontFamily: 'Proxima Nova, sans-serif',
            fontSize: '14px',
            backgroundColor: 'white',
            textDecoration: 'none'
        }
    };
    const { isLoggedIn } = useUserAuth();

    const toggleOffcanvas = () => {
        if (!isLoggedIn) {
            setIsOffcanvasVisible(!isOffcanvasVisible);
        }
        else {
            navigate("/account")
        }
    };

    console.log(place);
    console.log(placed);

    return (<>
        <div className="offcanvas offcanvas-end " style={{ width: '35%', fontFamily: 'Poppins', display: isOffcanvasVisible ? null : "none" }} id="demo">
            <div className="offcanvas-header mt-2 d-flex flex-column align-items-start justify-content-between">
                <button style={{ fontSize: 'x-small' }} type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                <div style={{ paddingLeft: '10px' }}>
                    <h1 style={{ fontSize: '20px' }} className="offcanvas-title mt-3 ">{viewSignIn ? ' Sign Up' : 'Login'}</h1>
                    <p className='mt-1' style={{ fontSize: '10px', fontWeight: '500' }}>or  <a href="#" onClick={() => setViewSignIn(!viewSignIn)} className='m-0 p-0' style={{ textDecoration: 'none', color: '#FC8019' }}>
                        {viewSignIn ? 'Already have an account' : 'Create an account'}</a></p>
                </div>
            </div>
            <div class="offcanvas-body px-4">
                {viewSignIn ? <SignUp /> : <Login />}
            </div>
        </div>

        <nav className="navbar d-none d-lg-block  shadow navbar-expand-lg px-1 navbar-light w-100" style={{ backgroundColor: 'white', position: 'sticky', top: '0', zIndex: '101' }} >
            <div className=" container-fluid">
                <Link to='/'> <img className="m-0 p-0 navbar-brand" src={Logo} alt='' width='30px' /> </Link>

                <div className='px-3 Ocolor align-items-center d-flex' style={{ fontSize: '14px' }} >
                    <p className='px-2 m-0'>  {placed}</p>
                    <i class="fa-solid   m-0 fa-location-dot"></i>

                </div>


                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div style={styles.proximaNova} className='align-items-center justify-content-end d-flex w-100'>
                        <Link to='/' className='border-0 bg-none Ocolor mx-4' style={styles.proximaNova}>
                            <i className="fa-solid fa-house"></i>&nbsp;
                            Home
                        </Link>
                        <Link to='/search' className='border-0 bg-none Ocolor mx-4' style={styles.proximaNova}>
                            <i className="fa-solid fa-magnifying-glass"></i>&nbsp;
                            Search
                        </Link>
                        <Link to='/Offers' className='border-0 bg-none Ocolor mx-4' style={styles.proximaNova}>
                            <i className="fa-solid fa-percent"></i>&nbsp;
                            Offers
                        </Link>

                        <button onClick={toggleOffcanvas} className="border-0 bg-none Ocolor mx-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" style={styles.proximaNova}>
                            <i className="fa-regular fa-user"></i>&nbsp;
                            Account
                        </button>
                        <Link to='/cart' className='border-0 bg-none Ocolor mx-4' style={styles.proximaNova}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p style={{ fontSize: '9px' }} className="m-0 badge rounded-pill bg-danger">{selectedItems.length !== 0 ? selectedItems.length : null}</p>&nbsp;
                            Cart
                        </Link>
                    </div>
                </div>

            </div>
        </nav>

        <div className='px-3 text-secondary shadow py-2 justify-content-between d-flex align-items-center d-sm-block d-md-none' style={{ backgroundColor: 'white', position: 'sticky', top: '0', zIndex: '101', fontSize: '14px' }}>
        <img className="m-0 p-0 navbar-brand" src={Logo} alt='' width='22px' /> 
           
            <Link to='/Offers' className='border-0 bg-none text-secondary mx-4' style={styles.proximaNova}>
                <i className="fa-solid fa-percent"></i>&nbsp;
                Offers
            </Link>

        </div>



    </>
    )
}

export default Header