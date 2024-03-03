import React from 'react'
import './header.css'
import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <>
     <div className='container-fluid bg-dark d-flex justify-content-center' >
       <nav className="navbar navbar-expand-lg  navbar-light gap-5">
         <a className="navbar-brand" style={{width:"200px"}} href="#">
          {/* <div className='searchbar'>
           <div>{<CiSearch className='pb-2' style={{fontSize:"30px"}}/>}</div>
          </div> */}
          <div className="input-group w-75 ">
          <span className="input-group-text text-light" style={{height:"30px"}}>
              <div>{<CiSearch style={{fontSize:"20px",color:"black"}}/>}</div>
            </span>
            <input type="text" style={{height:"30px"}} className="form-control " id="number"/>
            
          </div>
         </a>
         <button style={{color:"white", height:"25px",width:"20px",position:"relative",left:"10px"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"   aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon mb-3" style={{fontSize:"10px",position:"relative",right:"8px"}}></span>
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