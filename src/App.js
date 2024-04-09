import './App.css';
import MyProvider from '../src/Context/Context';
import Home from '../src/Auth Components/Home'
import { UserAuthContextProvider } from '../src/Context/UserAuthContext'
import { Toaster } from 'react-hot-toast';

//UserAuthContextProvider = It's a context and it check the user is logged in or not using firebase
//MyProvider = It's context and it have all shops details & items datas.
//Home - It's a home page of our application.
//Toaster - It's used to notify the informaion to user.

function App() {

  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <MyProvider>
        <UserAuthContextProvider>
          <Home />
        </UserAuthContextProvider>
      </MyProvider>
    </div>
  );
}

export default App;
