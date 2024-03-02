import React from 'react'
import './header.css'
import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <>
     <div className='container d-flex justify-content-center' style={{backgroundColor:"#212731"}}>
       <nav className="navbar navbar-expand-lg  navbar-light gap-5">
         <a className="navbar-brand" href="#">
          {/* <div className='searchbar'>
           <div>{<CiSearch className='pb-2' style={{fontSize:"30px"}}/>}</div>
          </div> */}
          <div className="input-group w-50 ">
          <span className="input-group-text text-light">
              <div>{<CiSearch style={{fontSize:"30px",color:"black"}}/>}</div>
            </span>
            <input type="text" className="form-control " id="number"/>
            
          </div>
         </a>
         <button style={{color:"white"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"   aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav gap-5 text-light  d-flex justify-content-end">
             <li className="nav-item active">
               <a className="nav-link text-light" href="#">Categories</a>
             </li>
             <li className="nav-item">
               <a className="nav-link text-light" href="#">Website Builders</a>
             </li>
             <li className="nav-item">
               <a className="nav-link text-light" href="#">Today's deals</a>
             </li>
           </ul>
         </div>
       </nav>
     </div>
    </>
  )
}

export default Header