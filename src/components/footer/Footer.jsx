import React from 'react'
import './footer.css'
import { RiArrowDropDownLine } from "react-icons/ri";
function Footer() {
  return (
    <>
     <div className='FooterContent container bg-dark text-light p-5'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 px-5'>
          <ul className='list-unstyled px-4'>
            <p>CATEGORIES</p>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 px-5'>
          <ul className='list-unstyled px-4'>
            <p>CONTACT</p>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 px-5 d-flex align-items-center'>
          <ul className='list-unstyled px-4'>
           <li>United States {<RiArrowDropDownLine style={{fontSize:"40px"}}/>}</li>
          </ul>
        </div>
      </div>
     </div>
    </>
  )
}

export default Footer