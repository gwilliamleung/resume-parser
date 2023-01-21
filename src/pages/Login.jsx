import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError ] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await logIn(email, password);
        console.log(user)
        navigate('/Home')
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
  }

  return (
    <div className="bg-blue-100 flex flex-wrap justify-center  items-center h-screen ">
          <form onSubmit={handleSubmit}className="flex flex-col px-28 py-36 bg-white border h-2/3 rounded-lg w-1/2">
            <input onChange={(e)=> setEmail(e.target.value)}
            className="border px-2" type="email" placeholder="Email"></input>
            <input onChange={(e)=> setPassword(e.target.value)}
            className="border px-2 my-2" type="password" placeholder="Password"></input>
            <button>Sign in</button>
            {error && <span>{error}</span>}

          </form>
    </div>
  )
}

export default Login