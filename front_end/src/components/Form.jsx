import React, {useState} from 'react'
import {TextField, Button,Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createPost } from '../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        title:'', message:'', creator:'', tags:'',selectedFile:'',
    })
    const dispatch = useDispatch(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-white">
                    <Paper>
                        <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                            <Typography varient='h6'>Create a Post</Typography>
                            <TextField name = "creator" varient='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} />
                            <TextField name = "title" varient='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                            <TextField name = "message" varient='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                            <TextField name = "tags" varient='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} />
                            <div>
                                <FileBase 
                                    type='file'
                                    multiple={false}
                                    onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                                />
                            </div>
                            <Button varient='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                            <Button varient='contained' color='secondary' size='small' onClick={clear} type='submit' fullWidth>Clear Form</Button>
                        </form>
                    </Paper>
                </div>
            </section>
        
        </>
    )
}

export default Form