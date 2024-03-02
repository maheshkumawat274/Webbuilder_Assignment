import React  from 'react'
import './about.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";
import { RiArrowDropRightLine } from "react-icons/ri";

import AboutContent1 from './AboutContent1';
import AboutContent2 from './AboutContent2';
import AboutContent3 from './AboutContent3';
import Webbuilder from './Webbuilder';
function About({newitem}) {
  const textSize={
    fontSize:"7.5px",
    fontWeight:"500"
  }

  
  return (
    <>
     <div className='container w-75'>
      <div className='pt-3'>
        <h1 className='fs-4'>Best Website builders in the US</h1>
      </div><hr/>
      <div className='TextSize d-flex justify-content-between text-center'>
        <div>
          {<CiCircleCheck/>}Last Updated - February 22, 2020 &nbsp;	&nbsp; Advertising Disclosure
        </div>
        <div>
          Top Relevent {<RiArrowDropDownLine/>}
        </div>
      </div><hr/>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 pt-2'>
          <button style={{border:"none", borderRadius:"5px", backgroundColor:"white"}}>Tools</button>
          <button style={{border:"none", borderRadius:"5px", backgroundColor:"white"}} className='mx-3'>AWS Builder</button>
          <button style={{border:"none", borderRadius:"5px", backgroundColor:"white"}}>Start Build</button>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 pt-2' >
          <button style={{border:"none", borderRadius:"5px", backgroundColor:"white"}}>Build Suplies</button>
          <button style={{border:"none", borderRadius:"5px", backgroundColor:"white"}}>Tooling</button>
          <button style={{border:"none", borderRadius:"5px", backgroundColor:"white"}}>BlueHosting</button>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'></div>
        
      </div>
      <div className='pt-3' style={{fontSize:"9.5px"}}>
        <ul className='list-unstyled d-flex gap-1'>
          <li>Home</li>
          <li>{<RiArrowDropRightLine style={{fontSize:"12px"}}/>}</li>
          <li>Hosting for all</li>
          <li>{<RiArrowDropRightLine style={{fontSize:"12px"}}/>}</li>
          <li>Hosting</li>
          <li>{<RiArrowDropRightLine style={{fontSize:"12px"}}/>}</li>
          <li>Hosting6</li>
          <li>{<RiArrowDropRightLine style={{fontSize:"12px"}}/>}</li>
          <li>Hosting5</li>
        </ul>
      </div>
      <AboutContent1/>
      <AboutContent2/>
      <AboutContent1 showagain = {false}/>
      <AboutContent3/>
      <h1 className='fs-3'>Related deals you might like for</h1>
      <Webbuilder Webbuilder = {newitem}/>
      <div className='row pt-5 pb-5'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h1 className='fs-1'>Sign up and get exclusive special deals</h1>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className="input-group w-75 mx-5 mt-3">
            <input type="text" className="form-control " id="number"/>
            <span className="input-group-text bg-primary text-light">
                Sign in
            </span>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default About