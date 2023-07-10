import React from 'react'
import {Link} from 'react-router-dom'
import eq from '../images/Equity_1.jpg'
import com from '../images/Commidity.jpg'
import mut from '../images/Mutual.jpg'

import logo from '../images/welcome.jpg'

const Welcome = () => {
    return (
        <div className='w-full h-screen bg-[#0a192f]'>
            {/* <img src={logo} alt="graph" style={{ maxWidth:"3000px", width:"100%", height:"auto"}}/> */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, we are</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                somethign
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                enjoy and explore our blog posts about market.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, hic. Sequi, cumque corrupti, quam molestias asperiores provident accusamus officia eius non, earum delectus exercitationem? Incidunt sapiente voluptates aliquam nihil! Quibusdam!
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View our blogs
                        <span className='group-hover:rotate-90 duration-300'>
                        {/* <HiArrowNarrowRight className='ml-3 ' /> */}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome