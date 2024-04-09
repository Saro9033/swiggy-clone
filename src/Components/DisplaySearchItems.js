import React from 'react'

const DisplaySearchItems = ({ src, title, rate, loc }) => {
    return (
        <div>
            <div className="mx-2 d-flex align-items-center rounded-3 hovered-link py-2 border-bottom w-100" style={{ fontFamily: 'Basis Grotesque Pro, sans-serif' }}>
                <img src={src} className="rounded-3 " alt=""
                    style={{
                        width: window.innerWidth < 500 ? '100px' : '170px',
                        height: window.innerWidth < 500 ? '80px' : '110px', objectFit: 'cover'
                    }} />
                <div className='px-3  d-flex flex-column  justify-content-between' style={{ height: '100%' }}>
                    <p className="card-title m-0" style={{ color: '#415666', fontWeight: '700', fontSize: window.innerWidth < 550 ? '11px' : "14px" }}>
                        {title.length > 25 && window.innerWidth < 550 ? (
                            <span>{title.substring(0, 25)}...</span>
                        ) : (
                            title
                        )}
                    </p>
                    <p className="m-0 card-title mt-1" style={{ color: '#415666', fontWeight: '700', fontSize: '12px' }}>
                        <i className="fa-solid fa-star" style={{ color: '#009936' }}></i> {rate}
                    </p>
                    <p className="m-0" style={{ color: '#818181', fontSize: '11px' }}>{loc}</p>
                </div>
            </div>

        </div>
    )
}

export default DisplaySearchItems