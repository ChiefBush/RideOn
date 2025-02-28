import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const {captain, setCaptain}=React.useContext(CaptainDataContext)
    const navigate = useNavigate()
        
    
        const submitHandler = async (e)=>{
            e.preventDefault();
            const captain={
                email: email,
                password: password
            }
            
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

            if (response.status === 200) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
    
            setemail('')
            setpassword('')
        }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-24 mb-8' src='../images/captainBlackLogo.png' alt='logo' />
        <form onSubmit={(e)=>{submitHandler(e)}}>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input 
            required 
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder="email@example.com" 
            />

            <h3 className='text-lg font-medium mb-2'>Enter password</h3>
            <input 
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            type="password" 
            placeholder="password" 
            />

            <button 
            className='bg-[#111] text-white font-semibold mt-5 mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base relative transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-102'
            >
                Login
            </button>

            <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600 relative transition duration-300 ease-in-out transform hover:text-blue-800 hover:scale-102'>Register as a Captain</Link></p>

        </form>
        </div>
        <div>
            <Link to='/login'
            className='bg-[#04a454] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base relative transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-102'
            >
                Sign in as User
            </Link>
        </div>
    </div>
  )
}

export default CaptainLogin