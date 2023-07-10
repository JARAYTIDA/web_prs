import React from 'react'

const BlogBox_2 = ({img}) => {
    return (
        <div className=' hover:-translate-y-1 hover:scale-110 duration-300 bg-yellow-500 hover:bg-emerald-900 hover:text-white hover:rounded-lg rounded-lg'>
            <div className='flex flex-row justify-between rounded-lg' style={{width:"900px", height:"300px"}}>
                <div style={{width:'450px', height:'300px'}} className='text-center'>
                    <h1 className='bold text-5xl underline my-3'>Headline</h1>
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id eos blanditiis, vitae nihil saepe accusamus mollitia amet maiores incidunt modi impedit itaque corporis iste nisi vero possimus. Ullam dolores voluptatum minus ipsum consectetur in, unde sequi tempore error. Optio in, laboriosam et distinctio, placeat ea aperiam neque ex veritatis autem dolorum tempora libero! Aliquam culpa incidunt accusamus beatae, magni sed facere molestias, officiis odit eveniet nemo.</p>
                </div>
                <div className=''>
                    <img src={img} alt="equity" className='overflow-hidden rounded-r-lg' style={{width:'450px', height:'300px'}} />
                </div>
            </div>
        </div>
    )
}

export default BlogBox_2