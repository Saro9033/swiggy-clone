import React, { useContext, useState } from 'react'
import CarouselItems from './CarouselItems'
import { MyContext } from '../Context/Context';
import DisplaySearchItems from './DisplaySearchItems';
import { Link } from 'react-router-dom';

const Search = () => {
    const { items } = useContext(MyContext)
    const [search, setSearch] = useState()

   
    const filteredItems = items
    .filter((restaurant) => 
        (restaurant.title && restaurant.title?.toLowerCase().includes(search?.toLowerCase())) ||
        (restaurant.loc && restaurant.loc?.toLowerCase().includes(search?.toLowerCase())) ||
        (restaurant.items && restaurant.items.some((category) =>
            category.listItems && category.listItems.some((item) =>
                (item.Ltitle && item.Ltitle?.toLowerCase().includes(search?.toLowerCase())) ||
                (item.Ldesc && item.Ldesc?.toLowerCase().includes(search?.toLowerCase()))
            )
        ))
    );
    const noResultsMessage = "No items found matching your search.";

 const handleSubmit = (e) =>{
    e.preventDefault()
    setSearch("")
 }
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
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
    ]
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className={`mt-4 ${window.innerWidth > 500 && 'px-5'}`}>
                <div className="input-group">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className=' form-control' type="text" placeholder='Search for restaurants food' />
                   <button style={{border:'none'}} type='submit'>  <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i> </span></button>
                </div>
            </form>

            <div className={`mt-3 ${window.innerWidth > 500 && 'px-5'}`}>
                <p style={{ fontSize: '20px', fontWeight: '800' }}>Popular Cuisines</p>
                <div className='d-flex scroll-container w-100' style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}>
                    {carousel2.map((img, index) => (
                        <CarouselItems key={index} img={img} verysmall={true} />
                    ))}
                </div>
            </div>

            {/* display search items */}
            <div className={`mt-4 ${window.innerWidth > 500 && 'px-5'} mb-5`}>
                {filteredItems.length === 0 && search ? (
                    <p>{noResultsMessage}</p>
                ) : (
                    filteredItems.map((img) => (
                        <Link key={img.id} style={{ textDecoration: 'none' }} to={`/restaurants/${img.id}`}>
                            <DisplaySearchItems src={img.img} title={img.title} rate={img.rate} loc={img.loc} small={true} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default Search