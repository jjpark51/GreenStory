import React , {useContext} from 'react'
import '../../static/main.scss'
import {Link} from 'react-router-dom';
import { AuthContext } from '../../context/authContext';



function Main({childToParent, handleSelect}) {

  const { currentUser, logout} = useContext(AuthContext)

  return (
    <>

         

        <div className='main-back'>
          <div className='h-navbar'>
              <div className='leftside' > 
              <Link to='/' style={{color: 'whitesmoke', textDecoration: 'none'}}><h1>Green <span>Story</span></h1> </Link>
                  
              </div>
              <div className='rightside'>
                  <div><Link to="tags" onClick={()=>{ childToParent('tags'); handleSelect('') }} style={{color: "whitesmoke", textDecoration: 'none'}}>Tags</Link></div>
                  <div><Link to="color" onClick={()=> {childToParent('color'); handleSelect('')}} style={{color: "whitesmoke",textDecoration: 'none'}}>Color</Link></div>
                  <div><Link to="profile" style={{color: "whitesmoke", textDecoration: 'none'}}>Profile</Link></div>
                  <div onClick={logout}><Link to="signin" style={{color: "whitesmoke", textDecoration: 'none' }}>Logout</Link></div>
                      
              </div>

          </div>
          <div className='title'>
            <h2><span>Green</span> is Medicine</h2>
          </div>
        </div>
        <div className='about-back'>
         <div className='subtitle'>
          An <span style={{"color": "red"}}>Apple</span> A Day<br></br> Keeps the Doctor Away
          <p>Maintain a Healthy Lifestyle by picking healthy foods, recipes and videos!</p>
         </div>
        </div>
        {console.log("End of main render")}
    </>
  )
}

export default Main
