import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import BlogBox_1 from './BlogBox_1'

const Posts = () => {

    const posts = useSelector((state) => state.posts);
    // console.log(posts);

    let len = 0;

    if(posts.data !== undefined){
        len = posts.data.length;
    }
    

    return (
        (len === 0) ? <CircularProgress /> : (
            <Grid container alignItems='stretch' spacing={3} className='flex flex-wrap'>
                {posts.data.map((post) => (
                    <Grid key = {post._id} item >
                        <BlogBox_1 post = {post} className='xs:mx-3'/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts