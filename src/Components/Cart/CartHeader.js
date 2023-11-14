import React, { useContext } from 'react'
import CartBody from './CartBody'
import { MyContext } from '../../Context/Context'

const CartHeader = ({ title, imgSrc, loc }) => {
    const {selectedItems, setSelectedItem} = useContext(MyContext)

 const removeFromCart = (id) => {
        setSelectedItem(prevItems => prevItems.filter((item, index) => index !== id));
        console.log('Item removed from cart:', selectedItems[id].selectedListItem.Ltitle);
    };


    return (
        <>
        <div className='d-flex align-items-center  justify-content-start mt-3' style={{ position: 'sticky' }}>
            <img width="45px" className='rounded-2' src={imgSrc} alt="" />
            <div className='mx-2'>
                <p className='m-0' style={{ fontSize: '14px' }}>{title}</p>
                <p className='m-0 text-secondary' style={{ fontSize: '12px' }}>{loc}</p>
            </div>
        </div>
        {
            selectedItems.map((item, index) => (
                (title === item.selectedShop.title && 
                    <CartBody
                        id={index}
                        key={index}
                        price={item.selectedListItem.Lprice}
                        removeFromCart={removeFromCart}
                        name={item.selectedListItem.Ltitle}
                        q={item.quantity}
                    />)
            ))
        }
    </>
    )
}

export default CartHeader