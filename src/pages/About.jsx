import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'
import Features from '../components/Features'
import AboutHeader from '../components/AboutHeader'
import AboutBanner from '../components/AboutBanner'

const About = () => {
  return (
    <div>
        <Header/>
        <AboutBanner/>
        <AboutHeader/>
        <Features/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default About