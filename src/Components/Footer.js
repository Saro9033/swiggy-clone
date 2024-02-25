import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='d-none d-lg-block'>
        <div className='row  p-5 m-0 mt-5' style={{background:'black', fontFamily:'Basis Grotesque Pro, sans-serif'}}>
            <div className="col-3">
            <img className="m-0 p-0 navbar-brand" src={Logo} alt='' width='70px' /> 
                <h5 className='text-light'>FoodCall</h5>
                <p className='text-secondary' style={{fontSize:'13px'}}>© 2023 Bundl Technologies Pvt. Ltd</p>
            </div>

            <div className="col-3">
                <h6 className='text-light'>Company</h6>
                <p className='text-secondary m-0' style={{fontSize:'13px'}}>About</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Careers</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Team</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Swiggy one</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Swiggy instamart</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Swiggy Genie</p>
            </div>

            
            <div className="col-3">
              <div className='mb-5'>  <h6 className='text-light'>Contact Us</h6>
                <p className='text-secondary m-0' style={{fontSize:'13px'}}>Help & Support</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Partner with us</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Ride with us</p>
                </div> 

                <h6 className='text-light'>Legal</h6>
                <p className='text-secondary m-0' style={{fontSize:'13px'}}>Terms & Condition</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Cookie policy</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Privacy policy</p>
            </div>

            <div className="col-3">
                <h6 className='text-light'>We deliver to:</h6>
                <p className='text-secondary m-0' style={{fontSize:'13px'}}>Bangalore</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Hyderabad</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Delhi</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Mumbai</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Chennai</p>
                <p className='text-secondary m-0 mt-2' style={{fontSize:'13px'}}>Pune</p>
            </div>
        </div>
    </div>
  )
}

export default Footer