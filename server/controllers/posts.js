import e from 'express'
import PostMessage from '../models/postMessage.js'

export const getPost = async (req, res)=>{
    const { id } = req.params;
    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const getPosts = async (req, res)=>{
    try {
        const postMessage = await PostMessage.find();

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createPost = async (req, res) => {
    const  post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message : error.message});
    }

}