import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import '../../static/navigation.scss'
import { AuthContext } from '../../context/authContext';

function Navigation({childToParent, handleSelect}) {


    const [color, setColor] = useState('green')

    const { currentUser, logout} = useContext(AuthContext)





    // We divide the navbar into two sections, left and right.
  return (
<div className='navbar'>
        <div className='leftside' > 
        <Link to='/' style={{color: 'whitesmoke', textDecoration: 'none'}}><h1>Green <span>Story</span></h1> </Link>
            
        </div>
        <div className='rightside'>
            <div><Link to="/tags" onClick={()=> { childToParent('/tags') ; handleSelect('')}} action="replace" style={{color: "whitesmoke", textDecoration: 'none'}}>Tags</Link></div>
            <div><Link to="/color" onClick={() => {childToParent('/color'); handleSelect('')}} action="replace" style={{color: "whitesmoke",textDecoration: 'none'}}>Color</Link></div>
            <div><Link to="/profile" style={{color: "whitesmoke", textDecoration: 'none'}}>Profile</Link></div>
            <div onClick={logout}><Link to="/signin" style={{color: "whitesmoke", textDecoration: 'none' }}>Logout</Link></div>
                  
        </div>
      {console.log("End of navigation render")}
    </div>
  )
}

export default Navigation
