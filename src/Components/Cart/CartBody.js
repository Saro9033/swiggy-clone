import React, {  useContext, useEffect, useState } from 'react'
import { MyContext } from '../../Context/Context';

const CartBody = ({ price, name , removeFromCart, id,q, notInd}) => {
  const [quantity, setQuantity] = useState(q);
  const { setTotal,selectedItems, setSelectedItem } = useContext(MyContext);
  
  useEffect(() => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems[id] = { ...updatedItems[id], quantity};
      setSelectedItem(updatedItems);

      const updatedTotal = updatedItems.reduce((total, item) => {
        return total + item.selectedListItem.Lprice * item.quantity;
      }, 0);
      setTotal(updatedTotal);
    }
  }, [quantity , selectedItems.length]);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className='my-3 border-bottom pb-3'>
      <div className="d-flex align-items-center justify-content-between">
        <h6 style={{ fontSize: '10px' }} className="m-0">  {name.length > 18 ? (
    <>
      {name.slice(0, 18)} <br />
      {name.slice(18)}
    </>
  ) : (
    name
  )}</h6>
        <div style={{display:notInd ? "none" : "block"}}>
          <div className="border rounded-1">
            <button className='btn' onClick={decreaseQuantity}><i style={{ fontSize: 'xx-small' }} className="fa-solid fa-minus"></i> </button>
            <span style={{ fontSize: 'small' }}>{quantity}</span>
            <button className='btn' onClick={increaseQuantity}><i style={{ fontSize: 'xx-small' }} className="fa-solid fa-plus"></i> </button>
          </div>
        </div>

        <div style={{ fontSize: '12px' }}>
          <span >&#8377;</span>
          <span className='price'>{price * selectedItems[id].quantity}</span>
        </div>
      </div>
       
    </div>
  )
}

export default CartBody