import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [userData, setuserData] = useState({})

    const submitHandler =(e)=>{
        e.preventDefault();
        setuserData({
            email: email,
            password: password
        })

        setemail('')
        setpassword('')

    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-24 mb-10' src='../images/logo_black.png' alt='logo' />
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

            <p className='text-center'>New here? <Link to='/signup' className='text-blue-600 relative transition duration-300 ease-in-out transform hover:text-blue-800 hover:scale-102'>Create new Account</Link></p>

        </form>
        </div>
        <div>
            <Link to='/captain-login'
            className='bg-[#fcb853] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base relative transition duration-300 ease-in-out transform hover:bg-yellow-600 hover:scale-102'
            >
                Sign in as Captain
            </Link>
        </div>
    </div>
  )
}

export default UserLogin