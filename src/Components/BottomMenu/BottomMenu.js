import React from 'react'
import BottomMenuItems from './BottomMenuItems'
import logoOut from '../../assets/logoOutline.png'
import origin from '../../assets/logo.png'
import SearchOU from '../../assets/loupe.png'
import SearchOL from '../../assets/loupe1.png'
import FoodOU from '../../assets/dish.png'
import FoodOL from '../../assets/dish1.png'
import UserOU from '../../assets/user.png'
import UserOL from '../../assets/user1.png'
import CartOU from '../../assets/shopping-cart.png'
import CartOL from '../../assets/shopping-cart1.png'

const BottomMenu = () => {
    return (
        <div className='d-sm-block d-md-none'>
            <div className=' bottomMenu'>
                <ul id='menu' className='p-0 px-1 m-0'>
                    <BottomMenuItems link={'/'} icon={logoOut} iconActive={origin} title="FOODCALL" />
                    <BottomMenuItems link={'/offers'} icon={FoodOU} iconActive={FoodOL} title="FOOD" />
                    <BottomMenuItems link={'/cart'} icon={CartOU} iconActive={CartOL} title="CART" cart={true} />
                    <BottomMenuItems link={'/search'} icon={SearchOU} iconActive={SearchOL} title="SEARCH" />
                    <BottomMenuItems link={'/account'} icon={UserOU} iconActive={UserOL} title="ACCOUNT" />
                </ul>
            </div>
        </div>
    )
}

export default BottomMenu