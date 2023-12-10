import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Home = ({ place, setPlace , setPlaced}) => {
    const textOptions = ["Game Night?", "Late Night Office?", "Cooking Gone Wrong?", "Unexpected Guests?", "Movie marathon?"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState(textOptions[currentTextIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setCurrentText(textOptions[currentTextIndex]);
    }, [currentTextIndex]);

    function handleHomeSubmit(e){
        e.preventDefault()
        setPlaced(place)
        }
      console.log(place);  
        const handleSubmit = () =>{
            toast.success("please enter your location!!")
        }

    return (
        <div >
            <div className=' px-1 my-3 d-flex justify-content-between align-items-center'>
                <img width='145px' src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/320px-Swiggy_logo.svg.png" alt="" />
                <div>
                    <button onClick={handleSubmit} className='btn btn-dark mx-1'>Sign up</button>
                </div>
            </div>

            <div className='mainC '> <div className='content container'>
                <div>
                    <div className='mt-5 '>
                        <h2>{currentText}</h2>
                        <p className='text-secondary h6' >Order food from favourite restaurants near from you</p>
                    </div>

                    <div className='mx-1 my-4 '>
                    <div>
  <form onSubmit={handleHomeSubmit}>
    <div className="input-group">
      <input
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="form-control border-end-0 border"
        type="search"
        placeholder="Enter your delivery location"
        id="example-search-input"
      />
      <span className="input-group-append">
        <button
          style={{ fontSize: 'medium' }}
          className="btn my-2 border-start-0 text-black border-bottom-0 border-end-0 border-top-0 ms-n5"
          type="button"
        >
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
      </span>
      <button type="submit" className="input-group-text" id="input-GRP">
        FIND FOOD
      </button>
    </div>
  </form>
</div>

                    </div></div>

                {/* <div className='my-3 mx-2 px-2'>
           <p className='text-secondary'> POPULAR CITIES IN INDIA </p>
           <p className='text-secondary'>Ahmedabad | Bangalore | Chennai | Delhi | Gurgaon | Hyderabad | Kolkata | Mumbai | Pune & more.</p>
            </div> */}
            </div>
            </div>
        </div>
    )
}

export default Home