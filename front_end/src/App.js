import React, {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {Navbar, Footer, Form} from './components'
import {Home, Equity, Commodity, Debt, ContactUs, AboutUs, PrivacyPolicy, Register, Login, BlogDetails} from './pages';
import { getPosts } from './actions/posts';

const App = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch])

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path = "/" exact element = {<Home/>} />
                <Route path = "/commodity" element = {<Commodity/>} />
                <Route path = "/equity" element = {<Equity/>} />
                <Route path = "/mutual-fund" element = {<Debt/>} />
                <Route path = "/about-us" element = {<AboutUs/>} />
                <Route path = "/contact-us" element = {<ContactUs/>} />
                <Route path = "/privacy-policy" element = {<PrivacyPolicy/>} />
                {/* <Route path = "/register" element = {<Register/>} />
                <Route path = "/login" element = {<Login/>} /> */}

                <Route path = "/form" element = {<Form/>} />
                <Route path = "/blog-details/:_id" element = {<BlogDetails/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App