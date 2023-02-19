import React, {useState} from 'react'
import { json } from 'react-router-dom'
import '../../static/signin.scss'
import Login from './Login'
import Signup from './Signup'


function Signin({childToParent , route}) {


  const [login ,setLogin] = useState(true)

  // const [email, setEmail] = useState('');

  // const handleEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  
  // const [password, setPassword] = useState('')

  // const handlePassword = (event) => {
  //   setPassword(event.target.value)
  // }
  

  // const onSubmitSignin = () => {
  //   fetch('http://localhost:3000/signin', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       email: email,
  //       password: password
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(user => {
  //     if(user.id) {
        
  //     }
  //   })
  // }
  const toggleLogin = () => {
    setLogin(e => !e)
  }



  return (
    <div className='signin-body'>
      <div className='title'>Green <span>Story</span></div>

      <div className='container'>

        <button className='login' onClick={()=> toggleLogin(true)}>Login</button>
        <button className='signup' onClick={()=> toggleLogin(false)}>Sign Up</button>

             
      {login === false ? 
        
        <Signup login={login} setLogin={setLogin}/> : 
        < Login childToParent={childToParent} route={route}/>
        }
      </div>

 
  

      
    </div>
  )
}

export default Signin
