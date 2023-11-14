import './App.css';
import Home from './Components/Home';
import MyProvider, { MyContext } from '../src/Context/Context';
import { useContext, useState } from 'react';
import Homes from '../src/Auth Components/Home'
import { UserAuthContextProvider } from '../src/Context/UserAuthContext'
import { Toaster } from 'react-hot-toast';

function App() {
  const{placed,setPlaced,place, setPlace} = useContext(MyContext)
  
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false}/>
      <MyProvider>
        <UserAuthContextProvider>
          {!placed ?
            <Home setPlace={setPlace} place={place} setPlaced={setPlaced} />
            :
            <Homes />

          }
        </UserAuthContextProvider>
      </MyProvider>
    </div>
  );
}

export default App;
