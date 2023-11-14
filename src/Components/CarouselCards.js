import React from 'react'

const CarouselCards = ({ src, title, rate, loc , small }) => {
    return (
        <div className="mx-2 zoom-in-div" style={{width:small || window.innerWidth < 500 ? '132px' : '220px', fontFamily: 'Basis Grotesque Pro, sans-serif' }}>
            <div style={{ height: small ? '100px' : '150px', width:'auto' }}>
                <img src={src} className="rounded-3 my-3" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
                <p className="card-title mt-4" style={{ color: '#415666', fontWeight: '700', fontSize: '12px' }}>
                    {small ?
                    title.length < 15 ? title : title.substring(0, 15) + '...' :
                    title.length < 15 ? title : title.substring(0, 30) + '...'}
                </p>
                <p className="card-title mt-1" style={{ color: '#415666', fontWeight: '700', fontSize: '12px' }}>
                <i className="fa-solid fa-star" style={{color: '#009936'}}></i> {rate}
                </p>
                <p style={{ color: '#818181', fontSize: '11px' }}>{loc}</p>             
        </div>
    )
}

export default CarouselCards