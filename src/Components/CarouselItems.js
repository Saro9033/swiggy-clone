import React from 'react'


const CarouselItems = ({ img, small, verysmall }) => {

  function widthSizes() {
    if (small)
      return '15%'
    else if (verysmall) {
      return '11%'
    } else {
      return '44%'
    }
  }
  return (
    <>
      <img
        style={{ width: widthSizes() }}
        className={!small && 'mx-2'}
        src={img}
        alt="" />
    </>
  )
}

export default CarouselItems