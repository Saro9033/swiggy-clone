import React, { useContext, useEffect, useState } from 'react';
import SignUp from '../Auth Components/SignUp';
import Login from '../Auth Components/Login';
import { MyContext } from '../Context/Context';
import { useUserAuth } from '../Context/UserAuthContext';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Account = () => {
    const { viewSignIn, setViewSignIn } = useContext(MyContext);
    const { user, isLoggedIn, logOut, number } = useUserAuth();

    const handleLogout = async () => {
        try {
            await logOut();

        } catch (error) {
            console.log(error.message);
        }
    };

    // order items
    const [orderedItems, setOrderedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (isLoggedIn && user) {
            // Fetch orders from Firestore for the current user
            const fetchOrders = async () => {
                const ordersCollection = collection(db, 'orders');
                const querySnapshot = await getDocs(ordersCollection);

                const userOrders = [];
                let totalPrice = 0;

                querySnapshot.forEach((doc) => {
                    const orderData = doc.data();
                    if (orderData.user === user.email) {
                        userOrders.push(orderData);
                        totalPrice += orderData.total;
                    }
                });

                setOrderedItems(userOrders);
                setTotalPrice(totalPrice);
            };

            fetchOrders();
        }
    }, [isLoggedIn, user?.email]);

    console.log(orderedItems)

    const changeDate = orderedItems.map(item => ({
        ...item,
        time: item.time.toDate().toISOString()
    }));

    const Ordering = changeDate.slice().sort((a, b) => b.time.localeCompare(a.time));
    console.log(Ordering);

    return (
        <div className=' w-100 container' >
            <div>
                {isLoggedIn ? (
                    <div className='mt-3 pb-5 px-1' style={{ background: '#F0F2F5' }}>
                        <div className='d-flex justify-content-end'>  <button className='btn btn-danger m-3' onClick={handleLogout}>Logout</button>
                        </div>
                        <div className='d-flex pt-2 align-items-center justify-content-center'>
                            <img src="https://www.sarojhospital.com/images/testimonials/dummy-profile.png" width={window.innerWidth < 600 ? "70px" : "100px"} className='rounded-circle' alt="" />
                            <div className='px-2'>
                                <h6 className='m-0' style={{ fontSize: window.innerWidth < 600 ? "13px" : "16px" }}> {user?.email} </h6>
                                <p className='m-0' >{number}</p>
                            </div>
                        </div>

                        <div className='container py-3 mt-2' style={{ fontFamily: 'poppins', color: 'white' }}>
                            <h6 className='m-0 text-dark' >Your Orders</h6>

                            {orderedItems.length > 0 ? (
                                <div className='container mt-3' style={{ fontSize: '15px' }}>
                                    {Ordering.map((order, index) => {
                                        const date = new Date(order.time); 

                                        const formattedDate = new Intl.DateTimeFormat('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            second: 'numeric',
                                            hour12: true,
                                        }).format(date);

                                        return( 
                                        <div className='mb-3' key={index}>
                                            <div className='d-flex justify-content-start align-items-center w-100'>
                                                <p className='text-secondary m-0' style={{ fontSize: window.innerWidth < 550 ? '8px' : '12px' }}>
                                               {formattedDate}
                                                </p>

                                            </div>

                                            <div className='table-responsive'>
                                                <table className='table table-hover table-dark table-striped' style={{ width: '100%', borderCollapse: 'collapse', fontSize: window.innerWidth < 550 ? '11px' : '14px', background: 'none' }}>
                                                    <thead className=''>
                                                        <tr>
                                                            <th style={{ borderBottom: '1px solid white' }}>Item</th>
                                                            <th style={{ borderBottom: '1px solid white' }}>Quantity</th>
                                                            <th style={{ borderBottom: '1px solid white' }}>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {order.items.map((item, itemIndex) => (
                                                            <tr key={itemIndex}>
                                                                <td style={{ fontSize: window.innerWidth < 550 ? '10px' : '14px' }}>
                                                                    <img className='rounded-circle mb-1' width="40px" height="40px" src={item.img} alt="" />
                                                                    {window.innerWidth < 600 ? <br /> : '\u00A0\u00A0'}

                                                                    {item.title.length > 20 && window.innerWidth < 600 ? `${item.title.substring(0, 19)}...` : item.title}
                                                                    <p style={{ fontSize: '8px' }} className='text-secondary'>{item.shop}</p>
                                                                </td>

                                                                <td>{item.quantitiy}</td>
                                                                <td>{item.price}</td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                            <td>&nbsp;</td>
                                                            <td style={{ borderTop: '1px dotted white' }} className='' colSpan="4">Total: {order.total}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>)
                                    })}
                                </div>
                            ) : (
                                <p className='pt-2 m-0 text-dark' style={{ fontSize: '14px' }}>No orders placed yet.</p>
                            )}
                        </div>

                    </div>) : (
                    <>
                        <h1 style={{ fontSize: '20px' }} className="offcanvas-title mt-3 ">
                            {viewSignIn ? ' Sign Up' : 'Login'}
                        </h1>
                        <p
                            className='mt-1'
                            style={{ fontSize: '10px', fontWeight: '500' }}>
                            or{' '}
                            <a
                                href='#'
                                onClick={() => setViewSignIn(!viewSignIn)}
                                className='m-0 p-0'
                                style={{
                                    textDecoration: 'none',
                                    color: '#FC8019',
                                }}>
                                {viewSignIn
                                    ? 'Already have an account'
                                    : 'Create an account'}
                            </a>
                        </p>
                    </>
                )}
            </div>
            <div class="offcanvas-body ">
                {isLoggedIn ? (
                    <p style={{ background: '#37718E', fontSize: '12px' }} className='text-center text-dark'>You are already logged in. No further action needed.</p>
                ) : viewSignIn ? (
                    <SignUp />
                ) : (
                    <Login />
                )}
            </div>
        </div>
    );
};

export default Account;
