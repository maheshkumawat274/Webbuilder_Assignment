import React from 'react'

function AboutContent4(props) {
  
  const btnstyle={
    height:"40px",
  }
  return (
    
    <> 
     <div className='container'>
       <div className='card mt-2 border-0'>
         <div className='d-flex justify-content-center'>
           <div className='d-flex justify-content-center w-50'>
              <img className='img-fluid' src={props.image}></img>
           </div>
         </div>
         <div className='mt-5'>
          <button className='border-0 mx-1'>{props.btn1}</button>
          <button className='border-0 mx-1'>{props.btn2}</button>
         </div>
         <div className='text-center pt-2'>
          <p className='fs-5 fw-bold'>{props.text1}</p>
         </div>
         <div>
          <p className='px-2'>{props.text2}</p>
         </div>
         <div className='mx-2'>
          <p>{props.old_price} &nbsp; <span style={{color:"#9FA9B3",fontSize:"11px"}}>{props.new_price}</span> <span style={{fontSize:"11px", color:"red"}}>{props.offer}</span></p>
         </div>
         <div className='container-fluid text-center pb-3'>
          <button className='btn btn-primary w-100 p-1' style={btnstyle}>{props.btn3}</button>
         </div>
       </div>
     </div>
    </>
  )
}

export default AboutContent4