import React , {useState, useContext} from 'react'
import '../../static/signin.scss'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

function Login({childToParent, route}) {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [loginStatus, setLoginStatus] = useState('')

  // const login = () => {
  //   Axios.post('http://localhost:3001/login', {
  //     username: username,
  //     password: password,
  //   }).then((response)=> {
  //     if(response.data.message) {
  //       setLoginStatus(response.data.message)
  //     } else {
  //       setLoginStatus(response.data[0].username)
  //     }
  //   })
  // }

  const [inputs, setInputs] = useState({
    username: '',
    password: ''
})

const [err, setErr] = useState(null);

const { login } = useContext(AuthContext);

//console.log(currentUser)


const handleChange = (e) => {
    setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await Axios.post('http://localhost:8800/api/auth/login', inputs).then((response)=> {
            login(inputs)
            console.log(response)
            console.log(inputs)
            childToParent('/')

            
        })
    } catch (err) {
        setErr(err.response.data)
    }
    
}

  return (
    <div className='loginbox'>
        <h1>Login</h1>
        <label htmlFor="username" >Username</label><br/>
        <input type="text" name="username"  onChange={handleChange} id="username" placeholder='Username' className='username'></input><br/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" name="password" onChange={handleChange} placeholder='Password' id="password" className='passwordInput'></input><br/>
        <button className='loginButton' onClick={handleSubmit}><Link to='/' >Login</Link></button>

        
    </div>
  )
}

export default Login
