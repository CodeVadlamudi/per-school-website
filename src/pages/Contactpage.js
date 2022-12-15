import React from 'react'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'

function Contactpage() {
  return (
    <div className="contact">
        <Header />
        <ContactBanner />
        <Form />
        <Footer />
    </div>
  )
}

export default Contactpage