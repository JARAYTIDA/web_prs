import React from 'react'
import logo from '../images/Mutual.jpg'
import { Link } from 'react-router-dom'

const BlogBox_1 = ({post}) => {
    const htmlContent = post.message;
    return (
        <Link to = {`/blog-details/${post?._id}`} className='justify-between'>
            <div className='justify-between '>

            <div>
<aside aria-label="Related articles" class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
                    <div class="px-4 mx-auto max-w-screen-xl">
                        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
                        <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                            <article class="max-w-xs">
                                <a href="#">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mb-5 rounded-lg" alt="Image 1" />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Our first office</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 2 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" class="mb-5 rounded-lg" alt="Image 2" />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Enterprise design tips</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 12 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" class="mb-5 rounded-lg" alt="Image 3" />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">We partnered with Google</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 8 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" class="mb-5 rounded-lg" alt="Image 4" />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Our first project with React</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 4 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" class="mb-5 rounded-lg" alt="Image 4" />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Our first project with React</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 4 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" class="mb-5 rounded-lg" alt="Image 4" />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Our first project with React</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 4 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" class="mb-5 rounded-lg" alt="Image 4" />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Our first project with React</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 4 minutes
                                </a>
                            </article>
                            <article class="max-w-xs">
                                <a href="#">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" class="mb-5 rounded-lg" alt="Image 4" />
                                </a>
                                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <a href="#">Our first project with React</a>
                                </h2>
                                <p class="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                    Read in 4 minutes
                                </a>
                            </article>
                            
                        </div>
                    </div>
                </aside>
                
            </div>
            </div>

                

{/* 
            <div className='w-[350px] rounded-[15px] bg-white cursor-pointer hover:bg-black hover:text-white'

                >
                <img src={post.selectedFile} alt="fund" className='w-full h-[158px] object-cover rounded-[15px]' />
                <div className='flex flex-col p-4'>

                    <div className='block'>
                        <h3 className='font-epilogue font-semibold text-[16px] text-left leading-[26px] line-clamp-3'>{post.title}</h3>
                        <p className='text-[#808191] mt-[5px] font-epilogue font-normal text-left leading-[18px] line-clamp-4' dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
                    </div>


                    <div className='flex items-center mt-[20px] gap-[12px]'>
                        <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]'>
                            <img src={logo} alt="user" className='w-1/2 h-1/2 object-contain'/>
                        </div>
                        <p className='flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate'>by <span className='text-[#b2b3bd]'>{post.creator}</span></p>
                    </div>
                </div>
            </div> */}
        </Link>


    )
}

export default BlogBox_1