import React from 'react'
import ClassBanner from '../components/ClassBanner'
import Classes from '../components/Classes'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Classpage() {
  return (
    <div>
        <Header />
        <ClassBanner />
        <Classes />
        <Footer />
    </div>
  )
}

export default Classpage