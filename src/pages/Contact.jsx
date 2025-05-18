import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContectBanner from '../components/ContectBanner'
import ContectForm from '../components/ContectForm'

const Contact = () => {
  return (
    <div>
        <Header/>
        <ContectBanner/>
        <ContectForm/>
        <Footer/>
    </div>
  )
}

export default Contact