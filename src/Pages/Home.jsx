import React from 'react'
import Navbar from '../Components/Navbar'
import HomePage from "../Components/HomePage"
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contacts'
import Footer from '../Components/Footer'
import GsapIntegration from '../gsapCompo/gsapPage'

const Home = () => {
  return (
    <>
        <div>
            {/* <GsapIntegration /> */}
            <Navbar />
            {/* <HomePage />
            <About />
            <Projects />
            <Contact /> */}
            {/* <Footer /> */}
        </div>
    </>
    )
}

export default Home