import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import TopPicks from './TopPicks';
import ListItems from './ListItems';
import { MyContext } from '../Context/Context';

const Restaurants = () => {
  const { id } = useParams();
  const {items} = useContext(MyContext)

  const selected = items.filter(item => item.id === parseInt(id));

  const styles = {
    basisGrotesqueProRegular: {
      fontFamily: 'Basis Grotesque Pro, sans-serif',
      fontWeight: 400,
    },
    basisGrotesqueProBold: {
      fontFamily: 'Basis Grotesque Pro, sans-serif',
      fontWeight: 700,

    },
  };
  return (
    <div className='container' style={window.innerWidth > 600 ? { padding: '0 130px' } : null}>


      <div className='row mt-5 pb-3' style={{ borderBottom: '1px dotted silver' }}>
        <div className="col-6">
          <h6>{selected[0].title}</h6>
          <p className='text-secondary m-0' style={{ fontSize: '12px' }}>{selected[0].main}</p>
          <p className='text-secondary m-0' style={{ fontSize: '12px' }}>{selected[0].loc}</p>
        </div>

        <div className="col-6 d-flex align-items-center justify-content-end">
          <div className='d-flex flex-column align-items-center justify-content-between p-2 rounded-3' style={{ border: '1px solid silver' }}>
            <p className="m-0 border-bottom" style={{ fontSize: '15px', fontWeight: '600', color: '#3D9B6D' }}><i className="fa-solid fa-star" ></i> &nbsp;{selected[0].rate} </p>
            <p className="m-0 text-secondary" style={{ fontSize: '9px', fontWeight: '600' }}>{selected[0].ratings} ratings </p>
          </div>
        </div>
      </div>

      {selected[0].topPicks && <div className='mt-3' style={{ borderBottom: '2px dotted silver' }}>
        <h5 style={styles.basisGrotesqueProBold}>Top Picks</h5>

        <div className=' d-flex align-items-center justify-content-around m-0'>
          {selected[0].topPicks
            .filter(item => item.img)
            .map((item, index) => (
              <div key={index} className=''>
                <TopPicks src={item.img} />
                <div style={{ position: 'relative', bottom: window.innerWidth < 800 ? '28px' : '45px' }} className='d-flex align-items-end justify-content-between w-100 px-1'>
                  <h6 style={window.innerWidth < 800 ? { fontSize: '10px' } : null} className='m-0 text-light'>&#8377;{item.price && `  ${item.price}`}</h6>
                  <button style={window.innerWidth < 800 ? { fontSize: '10px' } : null} className='p-1 btn btn-light'>ADD</button>
                </div>
              </div>
            ))}
        </div>
      </div> }

      <div className='my-5'>
        {selected[0].items.map((item, index) => {
          return <ListItems key={index} id={index} item={item} BigID={id} items={items}/>
        })}
      </div>

    </div>
  )
}

export default Restaurants