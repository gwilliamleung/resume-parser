import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, signUp } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await signUp(email,password);
            navigate('/home')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
      <div className="bg-blue-100 flex flex-wrap justify-center  items-center w-full h-screen ">
            <form onSubmit={handleSubmit} className="flex flex-col px-28 py-36 bg-white border h-2/3 rounded-lg w-1/2">
              <input onChange={(e)=> setEmail(e.target.value)}
              className="border px-2" type="email" placeholder="Email"></input>
              <input onChange={(e)=> setPassword(e.target.value)}
              className="border px-2 my-2" type="password" placeholder="Password"></input>
              <button>Sign up</button>
              {error && <span>{error}</span>}
            </form>
      </div>
    )
  }

export default Signup