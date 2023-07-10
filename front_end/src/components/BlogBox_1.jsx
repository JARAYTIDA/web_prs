import React from 'react'
import logo from '../images/Mutual.jpg'

const BlogBox_1 = () => {
    return (
        <div>

            <div className='sm:w-[288px] w-full rounded-[15px] bg-white cursor-pointer hover:bg-black hover:text-white'
                //  onClick={handleClick}
                >
                <img src={logo} alt="fund" className='w-full h-[158px] object-cover rounded-[15px]' />
                <div className='flex flex-col p-4'>
                    {/* <div>
                        <img src={tagType} alt="tag" className='w-[17px] h-[17px] object-contain' />
                        <p className='ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]'>Category</p>
                    </div> */}
                    <div className='block'>
                        <h3 className='font-epilogue font-semibold text-[16px] text-left leading-[26px] line-clamp-3'>This is the title what happens when Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam?</h3>
                        <p className='text-[#808191] mt-[5px] font-epilogue font-normal text-left leading-[18px] line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis provident culpa reiciendis minus inventore. Et iure quas consequuntur, ea reprehenderit sed accusamus nisi a voluptas modi, animi velit placeat, explicabo perferendis assumenda. Autem molestias aliquam, ex nam sequi temporibus sunt.</p>
                    </div>
                    {/* <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
                        <div className='flex flex-col'>
                            <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>{amountCollected}</h4>
                            <p className='mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate'>Raised of {target}</p>
                        </div>

                        <div className='flex flex-col'>
                            <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>{remainingDays}</h4>
                            <p className='mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate'>Days Left</p>
                        </div>

                    </div> */}

                    <div className='flex items-center mt-[20px] gap-[12px]'>
                        <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]'>
                            <img src={logo} alt="user" className='w-1/2 h-1/2 object-contain'/>
                        </div>
                        <p className='flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate'>by <span className='text-[#b2b3bd]'>owner name</span></p>
                    </div>
                </div>
            </div>
        </div>

        // <div className='relative mr-3 ml-3 mb-11' style={{width:"370px", height:"220px"}} >
        //     <img src={logo} alt="News Image" class="object-cover" style={{width:"370px", height:"220px"}} />
            
        //     <div class="absolute inset-0 flex justify-center">
        //         <h2 class="text-white text-2xl font-bold text-center">Your News Headline</h2>
        //     </div>
        // </div>
    )
}

export default BlogBox_1