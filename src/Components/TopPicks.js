import React from 'react'

const TopPicks = ({ src }) => {
    return (
            < img className='rounded-3' height={window.innerWidth > 990 ? '320px' : '130px'} width={window.innerWidth > 990 ? '250px' : '100px'} src={src} alt="" />
        
    );
};

export default TopPicks