import React, { useContext, useRef, useState } from 'react'
import CarouselItems from './CarouselItems';
import CarouselCards from './CarouselCards';
import { Link } from 'react-router-dom'
import { MyContext } from '../Context/Context';


const Layout = () => {
    const { items } = useContext(MyContext);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);

    const handleRatingFilter = (rating) => {
        setSelectedRating((prevRating) => (prevRating === rating ? null : rating));
    };

    const handlePriceFilter = (minPrice, maxPrice) => {
        setSelectedPriceRange((prevRange) =>
            prevRange && prevRange.min === minPrice && prevRange.max === maxPrice
                ? null
                : { min: minPrice, max: maxPrice }
        );
    };

    const filterItems = () => {
        let filteredItemsList = items;

        if (selectedRating) {
            filteredItemsList = filteredItemsList.filter((item) => item.rate >= selectedRating);
        }

        if (selectedPriceRange) {
            filteredItemsList = filteredItemsList.filter((item) =>
                item.items.some((category) =>
                    category.listItems.some(
                        (listItem) => listItem.Lprice >= selectedPriceRange.min && listItem.Lprice <= selectedPriceRange.max
                    )
                )
            );
        }

        return filteredItemsList;
    };

    const filteredItems = filterItems();


    const styles = {
        basisGrotesqueProRegular: {
            fontFamily: 'Basis Grotesque Pro, sans-serif',
            fontWeight: 400,
        },
        basisGrotesqueProBold: {
            fontFamily: 'Basis Grotesque Pro, sans-serif',
            fontWeight: 700,
            fontSize: window.innerWidth < 590 && '14px'

        },
    };

    const carousel1 = [
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/3e0bb76dfb8650b0c4c456588b4fa0fd",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/71a1a892aba05e349d776a8ef9686b39",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/327f4c2667e5e4b8d88818fc265cc476",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/64502956512bae801974a1dbe3647c50",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/c8176013bf8bcf1feaf344080512d489"
    ]
    const carousel2 = [
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Appam.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Puttu.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Pancake.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Bath.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Uttapam.png"
    ]
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 200;
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 200;
        }
    };

    const carouselRef1 = useRef(null);

    const scrollLeft1 = () => {
        if (carouselRef1.current) {
            carouselRef1.current.scrollLeft -= 300;
        }
    };

    const scrollRight1 = () => {
        if (carouselRef1.current) {
            carouselRef1.current.scrollLeft += 300;
        }
    };

    const carouselRef3 = useRef(null);

    const scrollLeft3 = () => {
        if (carouselRef3.current) {
            carouselRef3.current.scrollLeft -= 300;
        }
    };

    const scrollRight3 = () => {
        if (carouselRef3.current) {
            carouselRef3.current.scrollLeft += 300;
        }
    };

    return (
        <div className='container container'>

            <div className=' my-3'>
                <div className='mb-2 w-100 align-items-end justify-content-between d-flex'>
                    <h5 style={styles.basisGrotesqueProBold}>Best offers for you</h5>
                    <div className='d-none d-lg-block'>
                        <button className='btn rounded-circle mx-2 ' style={{ background: '#E1E1E6', fontSize: 'small' }} onClick={scrollLeft1}> <i className="fa-solid fa-arrow-left"></i></button>
                        <button className='btn rounded-circle' style={{ background: '#E1E1E6', fontSize: 'small' }} onClick={scrollRight1}>  <i className="fa-solid fa-arrow-right"></i></button>
                    </div></div>
                <div className='d-flex scroll-container ' style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }} ref={carouselRef1}>
                    {carousel1.map((img, index) => (
                        <CarouselItems key={index} img={img} />
                    ))}

                </div>
            </div>

            <div className=' mb-3'>
                <div className='my-1 w-100 align-items-end justify-content-between d-flex'>
                    <h5 style={styles.basisGrotesqueProBold}>What's on your mind?</h5>
                    <div className='d-none d-lg-block'><button className='btn rounded-circle mx-2 ' style={{ background: '#E1E1E6', fontSize: 'small' }} onClick={scrollLeft}> <i className="fa-solid fa-arrow-left"></i></button>
                        <button className='btn rounded-circle' style={{ background: '#E1E1E6', fontSize: 'small' }} onClick={scrollRight}>  <i className="fa-solid fa-arrow-right"></i></button>
                    </div></div>
                <div className='d-flex scroll-container p-0' style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }} ref={carouselRef}>
                    {carousel2.map((img, index) => (
                        <CarouselItems key={index} img={img} small={true} />
                    ))}

                </div>
            </div>

            <div >
                <div className='my-1 align-items-end justify-content-between d-flex'>
                    <h5 style={styles.basisGrotesqueProBold}>Top restaurant chains in Chennai</h5>
                    <div className='d-none d-lg-block'>
                        <button className='btn rounded-circle mx-2 ' style={{ background: '#E1E1E6', fontSize: 'small' }} onClick={scrollLeft3}> <i className="fa-solid fa-arrow-left"></i></button>
                        <button className='btn rounded-circle' style={{ background: '#E1E1E6', fontSize: 'small' }} onClick={scrollRight3}>  <i className="fa-solid fa-arrow-right"></i></button>
                    </div></div>
                <div className='d-flex scroll-container' style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }} ref={carouselRef3}>
                    {items.slice(0, 7).map((img) => (
                        <Link key={img.id} style={{ textDecoration: 'none' }} to={`/restaurants/${img.id}`}>
                            <CarouselCards src={img.img} title={img.title} rate={img.rate} loc={img.loc} />
                        </Link>
                    ))}

                </div>
            </div>


            <div className='mt-2 mb-5'>
                <h5>Your Restaurants</h5>
                <div className='d-flex align-items-center '>
                <button
                    style={{
                        fontSize: window.innerWidth<600 ? 'xx-small': 'small' }} 
                        className={` rounded-1  p-1 px-2 mx-4 ${selectedRating === 4 ? 'active-filter' : ''} `}
                    onClick={() => handleRatingFilter(4)}>4.0+ ratings</button>
                <button
                    className={` rounded-1  p-1 px-2 mx-4 ${selectedPriceRange && selectedPriceRange.min === 300 && selectedPriceRange.max === 600 ? 'active-filter' : ''}`}
                    style={{ fontSize: window.innerWidth<600 ? 'xx-small': 'small' }}
                    onClick={() => handlePriceFilter(300, 600)}>
                    Rs. 300 - Rs.600
                </button>

                <button
                    className={` p-1 px-2 rounded-1  mx-4 ${selectedPriceRange && selectedPriceRange.min === 0 && selectedPriceRange.max === 300 ? 'active-filter' : ''}`}
                    style={{ fontSize: window.innerWidth<600 ? 'xx-small': 'small'  }}
                    onClick={() => handlePriceFilter(0, 300)}>
                    below 300
                </button>
                </div>

                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    {filteredItems.map((img) => (
                        <Link key={img.id} style={{ textDecoration: 'none' }} to={`/restaurants/${img.id}`}>
                            <CarouselCards src={img.img} title={img.title} rate={img.rate} loc={img.loc} small={true} />
                        </Link>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Layout