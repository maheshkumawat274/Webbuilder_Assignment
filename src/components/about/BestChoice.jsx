import React from 'react'
import { GrTrophy } from "react-icons/gr";
function BestChoice() {
  return (
    <div>
      <button className='btn btn-warning p-2'> {<GrTrophy style={{color:"white"}}/>} Best Choice</button>
    </div>
  )
}

export default BestChoice