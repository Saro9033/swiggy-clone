import React, { useContext } from 'react'
import { MyContext } from '../../Context/Context'
import { Link, useNavigate } from 'react-router-dom'
import CartHeader from './CartHeader'
import { useUserAuth } from '../../Context/UserAuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-hot-toast';
import CartBody from './CartBody';


const Cart = () => {
    const { setSelectedItem, selectedItems, total } = useContext(MyContext)
    const uniqueTitlesSet = new Set();
    const { user, isLoggedIn } = useUserAuth();
    const navigate = useNavigate()

    console.log(selectedItems);

    const handleOrderFood = () => {
        if (isLoggedIn) {
            const ordersCollection = collection(db, 'orders');
            const orderData = {
                user: user.email,
                items: selectedItems.map((item) => ({
                    title: item.selectedListItem.Ltitle,
                    price: item.selectedListItem.Lprice,
                    img: item.selectedListItem.Limg,
                    quantitiy: item.quantity,
                    shop: item.selectedShop.title,
                })),
                total: total,
                time:serverTimestamp()
            };

            addDoc(ordersCollection, orderData)
                .then((docRef) => {
                    console.log('Order placed successfully! Order ID:', docRef.id);
                    toast.success('Order placed successfully!');

                    clearSelectedItems();

                })
                .catch((error) => {
                    console.error('Error placing order:', error);
                    toast.error('Error placing order. Please try again later.');
                });
        } else {
            alert('You are not signed in. Please sign in or log in.');
            navigate('/account')
        }
    };

    const clearSelectedItems = () => {
        setSelectedItem([]);
    };

    const deleteAll=()=>{
        setSelectedItem([])
    }

    return (
        <div >
            {selectedItems.length === 0 ?
                <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{ height: '88vh' }}>
                    <img width='240px' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
                    <h5>
                        Your cart is empty
                    </h5>
                    <p className='text-secondary' style={{ fontSize: '12px' }}>You can go to home page to view more restaurants</p>
                    <Link to='/' className='btn border-0 text-white' style={{ background: 'rgb(252,128,25)', fontWeight: '500',  }}>SEE RESTAURANTS NEAR YOU </Link>
                </div>
                :

                <div style={{ background: '#E9ECEE', height: '100%' }} className='w-100 '>
                    <div className='container pt-5 pb-5'>

                        <div className="row m-0 ">

                            <div className="col-lg-7 my-2 p-0 px-2 col-sm-12  shadow" style={{ background: 'white', margin: window.innerWidth > 550 ? "0 15px " : null, }}>
                           <div className='w-100 d-flex align-items-center justify-content-end '> <button className='align-end btn btn-outline-primary mt-3' style={{fontSize:'12px'}} onClick={deleteAll}>Delete all</button>
                           </div> 
                                <div className='px-3'>
                                    {selectedItems && selectedItems.length > 0 &&
                                        selectedItems.map((item, index) => {
                                            if (!uniqueTitlesSet.has(item.selectedShop.title)) {
                                                uniqueTitlesSet.add(item.selectedShop.title);
                                                return (
                                                    <CartHeader
                                                        key={index}
                                                        imgSrc={item.selectedShop.img}
                                                        title={item.selectedShop.title}
                                                        loc={item.selectedShop.loc}
                                                        selectedItems={selectedItems}
                                                    />
                                                );
                                            }
                                            return null;
                                        })
                                    }   </div>

                            </div>

                            <div className="col-lg-4 my-2 col-sm-12 p-3  shadow" style={{ background: 'white', margin: window.innerWidth > 550 ? "0 15px " : null, }}>
                                {isLoggedIn ?
                                    <div>

                                        <div className='Bill Details mt-2 w-100 py-2 ' style={{ background: 'white' }}>
                                            <p className='m-0' style={{ fontSize: '14px', fontWeight: 'bold' }}>Bill Details</p>

                                            <div>   {selectedItems.map((item, index) => {
                                                return <CartBody key={index}
                                                    id={index}
                                                    price={item.selectedListItem.Lprice}
                                                    name={item.selectedListItem.Ltitle}
                                                    notInd={true}
                                                    q={item.quantity} />

                                            })} </div>

                                            <div style={{ position: 'sticky', bottom: '0', background:'white' }}>  <div className='mt-2 d-flex align-items-center justify-content-between w-100'>
                                                <p className='m-0' style={{ fontSize: '14px', fontWeight: 'bold' }}>To Pay</p>
                                                <p className='m-0' style={{ fontSize: '14px', fontWeight: 'bold' }}>&#8377;{total} </p>
                                            </div>
                                                <div className='d-flex w-100 align-items-center justify-content-center '>
                                                    <button onClick={handleOrderFood} className=' mt-3 align-center btn btn-success'>Order your food</button>
                                                </div> </div>
                                        </div>


                                    </div>
                                    :
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <h6 className='text-danger text-center w-100'>You're not Sign In. Please Sign In or Log In </h6>
                                        <Link to='/account' className='btn mt-2' style={{ background: '#F4680F' }}>Sign In</Link>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Cart