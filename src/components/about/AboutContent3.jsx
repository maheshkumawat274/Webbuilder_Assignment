import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
function AboutContent3() {
  const btncdk ={
    backgroundColor:"#F2F4F7",
    borderRadius:"5px",
    border:"none"
  }
  const highlightbtn = {
    border:"none",
    borderRadius:"5px",
    backgroundColor:'white'
  }
  return (
    <>
      <div className='container-fluid  pt-3 pb-3'>
        <div className='row' style={{backgroundColor:"white"}}>
          <div className='col-lg-4 col-md-6 col-sm-12 pt-5 pb-5 d-flex justify-content-center'>
            <div className='card d-flex justify-content-center align-items-center  w-50 border-0' >
            <img className='img-fluid' src='./img/builder.png'></img>
            <p className='pt-2'>CDK</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pt-5 pb-5'>
            <div style={{fontSize:"13px"}}>
              <span style={{fontWeight:"700"}}>CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides<br/>
              <button style={btncdk}>26% off</button>
            </div>
              <p className='fw-bold pt-1' style={{fontSize:"15px"}}>Main highlights</p>
              <div className='card mx-3 pt-3 px-3' style={{backgroundColor:"#FFF4ED"}}>
                <p>
                  <button style={highlightbtn}>9.9</button>Building Responsive
                </p>
                <p>
                  <button style={highlightbtn}>8.9</button>Cool
                </p>
                <p>
                  <button style={highlightbtn}>8.9</button>Docs
                </p>
              </div>
              <div className='pt-3'>
                <div>Why we love it</div>
                <div>{<FaCircleCheck/>} Documentation</div>
                <div>{<FaCircleCheck/>} Easy Use</div>
                <div>{<FaCircleCheck/>} Out Of Box</div>
              </div>
              <div>
                <a href='#' style={{textDecoration:"none",position:"relative",right:"30px"}}>Show more</a>
              </div>
            
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pt-5 pb-5'>
            <div className='d-flex justify-content-center'>
              <div className='card pt-4 pb-4 w-50 text-center border-0' style={{backgroundColor:"#F3F9FF"}}>
                <div className='fs-5 fw-bold'>9.1</div>
                <div>Very Good</div>
                <div>{<FaStar style={{color:"yellow"}}/>}{<FaStar style={{color:"yellow"}}/>}{<FaStar style={{color:"yellow"}}/>}{<FaStar style={{color:"yellow"}}/>}{<FaRegStar style={{color:"yellow"}}/>}</div>
            </div>
            </div>
            <div className='d-flex justify-content-center' style={{marginTop:"65%"}}>
              <button className='btn btn-primary  px-5'>View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent3