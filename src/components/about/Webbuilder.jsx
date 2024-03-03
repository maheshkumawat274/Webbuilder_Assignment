import React from 'react'
import AboutContent4 from './AboutContent4'

function Webbuilder({Webbuilder}) {
  return (
    <>
      <div className='row'>
        {Webbuilder.map((item,i)=><div key={i} className='col-lg-4 col-md-6 col-sm-12'>
        <AboutContent4  image={item.img} btn1 = {item.btn1} btn2 = {item.btn2} text1 ={item.text1} text2={item.text2} old_price = {item.old_price} new_price = {item.new_price} offer = {item.offer} btn3 = {item.btn3}
        />
        </div>)}
      </div>
    </>
  )
}

export default Webbuilder