import React, { useContext } from 'react'
import CarouselCards from './CarouselCards'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context/Context'

const Offers = () => {
    const {items} = useContext(MyContext)

    return (
        <div className='container'>
            <div className='mt-4 mb-5'>
                <h5>Restaurants With Great Offers Near Me</h5>
                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    {items.map((img) => (
                       <Link key={img.id} style={{textDecoration:'none'}} to={`/restaurants/${img.id}`}>
                       <CarouselCards  src={img.img} title={img.title} rate={img.rate} loc={img.loc} /> 
                       </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Offers