import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div >
      <img className="bigshot" src="./logo.png" alt="" srcset="" />
    
    </div>
    <div className="title">
    

    Join SureShot Live Draw
     
    </div>
    <div className="subtitle">
    Please enter a valid sureshot ticket number.
    </div>
    <div>
      <input className='hminput' type="text" placeholder='Enter Ticket Number' />
    </div>
    <div>
      <button className='hmbtn' onClick={()=>{navigate('/round1')}}>Join Live Draw</button>
    </div>
    <div className='copyright'>
    © 2021 BigShot. All rights reserved.
    </div>
    </>
  )
}

export default Home