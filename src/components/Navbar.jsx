import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    console.log(user)
    const handleLogout = async () => {
        try{
            await logOut()
            navigate('/signup')
        } catch(error){
            console.log(error)
        }
    }
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link to='/home'>
            <h1 className="text-blue-600 text-4xl font-bold cursor-pointer">
                Parse
            </h1>
        </Link>
    {user?.email ? (       
        <div>
            <Link to='/search'>
            <button className="text-white pr-4">Search</button>
            </Link>
            <Link to='/home'>
                <button className="text-white pr-4">Submit Resume</button>
            </Link>
                <button 
                onClick={handleLogout}
                className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white">
                    Logout
                </button>
        </div>
        ) : (
        <div>
            <Link to='/'>
                <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to='/signup'>
                <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer text-white">
                    Sign up
                </button>
            </Link>
        </div>)
        }
    </div>
  );
};

export default Navbar;
