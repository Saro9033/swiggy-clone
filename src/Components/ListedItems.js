import React, { useContext,  useState } from 'react';
import { MyContext } from '../Context/Context';

const ListedItems = ({ src, title, price, desc, id, BigID, smallId }) => {
    const { hanldeFin } = useContext(MyContext);
    const [quantity, setQuantity] = useState(1);
    const [isClicked, setIsClicked] = useState(false);

    const handleSelect = (id) => {
      setIsClicked(true);
      hanldeFin(BigID, smallId, id, quantity)
      setQuantity(1);
    };

    const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const decreaseQuantity = () => {
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
      if (quantity === 1) {
        setIsClicked(false);
      }
    };
  return (
    <li style={{ listStyle: 'none', fontFamily: 'Poppins, sans-serif' }} className='py-3 border-bottom'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-between flex-column'>
          <div>
            <h6 className='m-0' style={{ fontSize: window.innerWidth < 600 ? '12px' : '15px' }}>
              {(title.length > 20 && window.innerWidth < 600) ? title.substring(0, 25) + '...' : title}</h6>
            <p style={{ fontSize: window.innerWidth < 600 ? '12px' : '15px' }}> &#8377; {price}</p>
          </div>
          <p style={{ fontSize: window.innerWidth < 600 ? '9px' : '11px', paddingRight: '10px' }} className=' text-secondary'>
            {(desc.length > 45 && window.innerWidth < 600) ? desc.substring(0, 45) + '...' : desc}</p>
        </div>
        <div className='d-flex flex-column align-items-end justify-content-center'>
          {src ? <img src={src} className='rounded-3' style={{ width: window.innerWidth < 600 ? '80px' : '110px', height: window.innerWidth < 600 ? '60px' : '90px' }} alt="" /> : ""}
     
          {isClicked ? <div className='w-100 border d-flex align-items-center justify-content-between'>
            <button className='btn' onClick={decreaseQuantity}><i style={{ fontSize: 'xx-small' }} className="fa-solid fa-minus"></i> </button>
            <span style={{ fontSize: 'small' }}>{quantity}</span>
            <button className='btn' onClick={increaseQuantity}><i style={{ fontSize: 'xx-small' }} className="fa-solid fa-plus"></i> </button>
          </div> :     <button
            onClick={() => handleSelect(id)}
            className={`w-100 btn  p-1`}
            style={{ fontSize: '12px', border: '1px solid black' }}
          > Add </button>}
          
        </div>
      </div>
    </li>
  );
};

export default ListedItems;
