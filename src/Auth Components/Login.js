import React, { useCallback, useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useUserAuth } from '../Context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { logIn } = useUserAuth();
  const { setIsOffcanvasVisible } = useContext(MyContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      toast.success("successfully login");
      navigate("/account");
      setIsOffcanvasVisible(false)

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleLogin}>
        <div className="form-floating ">
          <input onChange={(e) => setEmail(e.target.value)} value={email} required type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mt-4">
          <input onChange={(e) => setPassword(e.target.value)} value={password} required type="text" className="form-control" id="password" placeholder="password" name="password" />
          <label htmlFor="pass">password</label>
        </div>
        <button
          style={{ background: '#FC8019', color: 'white' }}
          className="mt-3 btn w-100 text-center"
          type="submit" >
          Continue
        </button>
        <p style={{ fontSize: '9px', marginTop: '4px' }}>
          By creating an account, I accept the Terms & Conditions & Privacy Policy
        </p>
      </form>
    </div>
  );
};

export default Login;
