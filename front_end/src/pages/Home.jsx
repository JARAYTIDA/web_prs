import React from 'react'

import {BlogBox_1, BlogBox_2} from "../components"

import eq from '../images/Equity_1.jpg'
import com from '../images/Commidity.jpg'
import mut from '../images/Mutual.jpg'

import {Welcome, Services} from './'

const Home = () => {
    return (
        <div>
            <Welcome/>
            <Services/>
        </div>
        // <div className='bg-gradient-to-r from-slate-800 to-slate-950'>
        //     <div className='relative'>
        //         <img src={logo} alt="graph" style={{ maxWidth:"3000px", width:"100%", height:"auto"}}/>
        //         <h1 class="absolute  text-6xl bold text-white">KindaCode.com</h1>
        //     </div>
        //     <div className='flex flex-col justify-center items-center bg-fixed'>
        //         <div className='justify-center font-bold text-5xl my-6 text-white'>About Us</div>
        //         <div className='box-content text-center w-128 text-white' style={{width:"600px"}}> 
        //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quod, magnam eius tenetur aspernatur impedit nulla. Praesentium dicta id officiis enim perferendis fuga labore magni soluta ipsam accusantium. Incidunt quis reprehenderit voluptatum fugiat dolores? Porro culpa magni repellendus incidunt dignissimos error ratione earum quidem aliquam veritatis ad, atque molestiae aspernatur.
        //         </div>
        //         <div className='flex flex-col mb-6' style={{marginTop:'200px'}}>
        //             < BlogBox_1 img={eq} />
        //             < BlogBox_2 img={com} />
        //             < BlogBox_1 img={mut} />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Home