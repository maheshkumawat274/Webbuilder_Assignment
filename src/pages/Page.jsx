import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import About from '../components/about/About'

function Page({item}) {
  return (
    <>
     <div className='contaner-fluid bg-light'>
      <div className='container-fluid bg-dark'>
       <Header/>
      </div>
      <About newitem={item}/>
      <div className='container-fluid bg-dark'>
       <Footer/>
      </div>
     </div>
    </>
  )
}

export default Page