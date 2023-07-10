import React from 'react'
import {Link} from 'react-router-dom'
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-slate-950 to-slate-800'>
            <div className='flex justify-between text-white text-2xl h-48'>
                <div className='underline mx-6 my-6 font-bold text-4xl'>
                    <Link to="/">
                        <h1>PRS</h1>
                    </Link>
                </div>
                <div className='flex mx-6 my-6 '>
                    <Link to="/" className='mx-6'>Home</Link>
                    <Link to="/about-us" className='mx-6'>About us</Link>
                    <Link to="/contact-us" className='mx-6'>Contact us</Link>
                    <Link to="/privacy-policy" className='mx-6'>Privacy policy</Link>
                    <Link to="https://twitter.com" className='mx-6 my-2'> <FaTwitter/> </Link>
                    <Link to="https://instagram.com" className='mx-6 my-2'> <AiFillInstagram /> </Link>
                    <Link to="https://linkedin.com" className='mx-6 my-2'> <AiFillLinkedin /> </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer