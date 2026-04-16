import React, { useState } from 'react'
import Navbar from './copmonenets/Nav-bar/Navbar'
import Hero from './copmonenets/Hero/Hero'
import Programs from './copmonenets/Programs/Programs'
import Title from './copmonenets/Title/Title'
import About from './copmonenets/About/About'
import Campus from './copmonenets/Campus/Campus'
import Testimonials from './copmonenets/Testimonials/Testimonials'
import Contact from './copmonenets/Contact/Contact'
import Footer from './copmonenets/Footer/Footer'
import VideoPlayer from './copmonenets/VideoPlayer/VideoPlayer'
// import {Hashrouter} from "react-router-dom"

const App = () => {

 const [playState,setPlayState] = useState(false);

  return (
   
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'></Title>
      <Programs></Programs>
      <About setPlayState={setPlayState}></About>
      <Title subtitle='Gallery' title='Campus Photos'></Title>
      <Campus></Campus>
      <Title subtitle='TESTIMONIALS' title='What Students Says'></Title>
      <Testimonials></Testimonials>
      <Title subtitle='Contact Us' title='Get in Touch'></Title>
      <Contact></Contact>
      <Footer></Footer>



      </div>

    <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
   
  )
}

export default App
