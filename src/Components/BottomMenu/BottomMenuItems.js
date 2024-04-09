import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MyContext } from '../../Context/Context';

const BottomMenuItems = ({ link, icon, iconActive, title, cart }) => {
  const { pathname } = useLocation();
  const isActive = pathname === link;
  const { selectedItems } = useContext(MyContext)
  return (
    <Link style={{ textDecoration: 'none' }} className='d-flex flex-column align-items-center' to={link}>
      {(cart) &&
        <p style={{ fontSize: '6px', position: 'absolute' }} className="m-0 badge rounded-pill bg-danger">{selectedItems.length !== 0 ? selectedItems.length : null}</p>
      }
      <img width="20px" height='20px' src={isActive ? iconActive : icon} alt="" />
      <span style={{ fontSize: '10px', color: '#4c4F53', fontFamily: 'poppins' }}>{title}</span>
    </Link>
  )
}

export default BottomMenuItems