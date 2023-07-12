import React from 'react'
import {Link} from 'react-router-dom'
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'


const Navbar = () => {
    return (
        <div>
            <div className='flex backdrop-filter backdrop-blur-lg  z-50 backdrop-opacity-90 fixed w-full text-white text-2xl justify-between'>

                <div className='flex mx-6 my-6 font-bold underline text-4xl place-items-center'>
                    <Link to="/" className='text-amber-500'>
                        <h1>PRS</h1>
                    </Link>
                </div>
                
                <div className='flex mx-6 my-6 place-items-center justify-between'>
                    <div className='mx-6 hover:text-white hover:text-4xl duration-500'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='mx-6 hover:text-white hover:text-4xl duration-500'>
                        <Link to="/equity">Equity</Link>
                    </div>
                    <div className='mx-6 hover:text-white hover:text-4xl duration-500'>
                        <Link to="/commodity">Commodity</Link>
                    </div>
                    <div className='mx-6 hover:text-white hover:text-4xl duration-500'>
                        <Link to="/mutual-fund" >Mutual Fund</Link>
                    </div>
                </div>

                <div className='flex mx-6 my-6 place-items-center'>
                    <div className='mx-3 hover:text-blue-400 hover:text-4xl duration-500'>
                        <Link to = "https://www.twitter.com/"> <FaTwitter /> </Link>
                    </div>
                    <div className='mx-3 hover:text-pink-600 hover:text-4xl duration-500'>
                        <Link to = "https://www.instagram.com/"> <AiFillInstagram /> </Link>
                    </div>
                    <div className='mx-3 hover:text-blue-700 hover:text-4xl duration-500'>
                        <Link to = "https://www.linkedin.com/"> <AiFillLinkedin  /> </Link>
                    </div>
                    {/* <div className='bg-yellow-600 rounded-lg mx-3'>
                        <button className='mx-3 my-1'>
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                    <div className='bg-yellow-600 rounded-lg mx-3'>
                        <button className='mx-3 my-1'>
                            <Link to="/register">Register</Link>
                        </button>
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}

export default Navbar