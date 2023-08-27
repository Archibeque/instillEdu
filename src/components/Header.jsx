import React, { useState} from 'react';
import './Header.css'
import { getMovies } from '../app_state/apiCalls';
import { useDispatch } from 'react-redux';




function Header() {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(null)

  const handleChange = (e) => {
    setUpdated(e.target.value)
  }

  const handleSend = async() => {
    try {
    
    getMovies(dispatch, updated)
    setUpdated(null)
      
    } catch (error) {
      console.log(error)
    }
  }

    
      return (
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">NNADIDAN</span>
        </div>
      

        <div className="topRight">
          


    
<div className="input-box">
  <input type="text" onChange={handleChange} placeholder="Search here..." />
  <button className="button" onClick={handleSend}>Search</button>
</div>

  
          

          
        </div>
      </div>
    </div>
      );
    }
    

export default Header
