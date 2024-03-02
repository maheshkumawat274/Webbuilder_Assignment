import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import BestChoice from './BestChoice';
function AboutContent1({showagain =true}) {

  const [starprint, setstartprint] = useState('');

  const setStar = () => {
    let stars = [];
    
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar style={{color:"yellow"}} key={i} />);
    }

    setstartprint(stars);
  };
  useEffect(()=>{
    setStar()
  },[])

  const choice = {
    position:"relative",
    bottom:"15px",
    right:"10px"
  }

  
  return (
    <>
      <div className='container-fluid pt-3 pb-3'>
        <div className='row' style={{backgroundColor:"white"}}>
          <div style={choice}>
              {showagain && <BestChoice/>}
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pt-5 pb-5 d-flex justify-content-center'>
            
            <div className='card d-flex justify-content-center align-items-center border-0 w-50'>
            <img className='img-fluid' src='./img/builder.png'></img>
            <p className='pt-2'>Builder 1</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pt-5 pb-5'>
            <div style={{fontSize:"13px"}}>
              <span style={{fontWeight:"700"}}>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
            </div>
              <p className='fw-bold pt-1' style={{fontSize:"12px"}}>Main highlights</p>
              <p className='px-4'style={{fontSize:"12px"}}>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
              <a href='#' style={{textDecoration:"none"}}>Show more {<RiArrowDropDownLine className='fs-4'/>}</a>
            
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pt-5 pb-5'>
            <div className='d-flex justify-content-center'>
              <div className='card pt-4 pb-4 w-50 text-center border-0'  style={{backgroundColor:"#F3F9FF"}}>
                {showagain ? (<div className='fs-5 fw-bold'>9.8</div>):(<div className='fs-5 fw-bold'>9.3</div>)}
                <div>Exceptional</div>
                <div>{starprint}</div>
            </div>
            </div>
            <div className='d-flex justify-content-center pt-5'>
              <button className='btn btn-primary  px-5'>View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent1