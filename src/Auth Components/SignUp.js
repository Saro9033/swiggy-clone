import React, { useContext, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Alert } from 'react-bootstrap'
import { useUserAuth } from '../Context/UserAuthContext'
import { MyContext } from '../Context/Context'

const SignUp = () => {
    const { setUpRecaptcha, signUp, number,setNumber } = useUserAuth()
    const { setViewSignIn} = useContext(MyContext)
    const [error, setError] = useState("")
    const [otp, setOtp] = useState("")
    const [flag, setFlag] = useState(false)
    const [confirmObj, setConfirmObj] = useState(null)

    //email and passowrd
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getOtp = async (e) => {
        e.preventDefault()
        setError("")
        if (number === "" || number === undefined)
            return setError("please enter a valid Phone Number")
            if (email === "" || password === "") {
                return setError("Please enter both email and password");
              }
        try {
            const response = await setUpRecaptcha(number);
            console.log(response)
            setConfirmObj(response);
            setFlag(true)

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Email is already in use. Please use a different email.");
            }
            else {
                setError(error.message);
            }
        }
    }

    const verifyOtp = async (e) => {
        e.preventDefault()
        if (otp === "" || otp === null) return;
        try {
            setError("")
            await confirmObj.confirm(otp)
            await signUp(email, password);
            console.log(email, password);
            setViewSignIn(false)

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            {error && <Alert varient="danger">{error}</Alert>}

            <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                <PhoneInput required defaultCountry='IN' value={number} onChange={setNumber} type="tel" className="form-control" id="Phone Number" placeholder="Phone Number For OTP" name="Phone Number" />

                <div className="form-floating mt-2">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} required type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mt-2">
                    <input onChange={(e) => setPassword(e.target.value)} value={password} required type="text" className="form-control" id="password" placeholder="password" name="password" />
                    <label htmlFor="pass">password</label>
                </div>
                <div className='mt-2' id='recaptcha-container'></div>
                <button style={{ background: '#FC8019', color: 'white' }} className="mt-3 btn w-100 text-center" type="submit">
                    Continue
                </button>
                <p style={{ fontSize: '9px', marginTop: '4px' }}>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
            </form>


            <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                <div className="form-floating ">
                    <input required value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className="form-control" id="OTP" placeholder="OTP" name="OTP" />
                    <label htmlFor="OTP">Enter OTP</label>
                </div>
                <button style={{ background: '#FC8019', color: 'white' }} className="mt-3 btn w-100 text-center" type="submit">
                    Submit
                </button>
                <p style={{ fontSize: '9px', marginTop: '4px' }}>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
            </form>

        </div>
    )
}

export default SignUp