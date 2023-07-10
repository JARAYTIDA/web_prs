import React from 'react'


const AboutUs = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    About
                </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>keep yourself update with us</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus eligendi ipsam voluptatem provident ipsa unde laudantium ullam maxime ipsum accusantium voluptatibus, quod modi amet doloremque. Et incidunt accusantium corrupti iure corporis sequi voluptas asperiores voluptate saepe perferendis nesciunt, cum inventore maxime ullam quae alias, magnam architecto cupiditate nostrum iste.</p>  
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs