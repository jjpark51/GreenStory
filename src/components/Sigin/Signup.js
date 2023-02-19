import React, {useState} from 'react'
import Axios from 'axios'
import '../../static/signin.scss'
import { useNavigate } from 'react-router-dom';

function Signup({login, setLogin}) {

    // const [usernameReg, setUsernameReg] = useState('');
    // const [passwordReg, setPasswordReg] = useState('');

    // const register = () => {
    //     Axios.post('http://localhost:3001/register', {
    //         username: usernameReg, 
    //         password: passwordReg,
    //     }).then((response)=> {
    //         console.log(response)
    //     })
    // }

    // Here we created a simple scheme where we can get the inputs from the textfield and store them
    // useState + handleChange
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [err, setErr] = useState(null);

    const navigate = useNavigate()


    const handleChange = (e) => {
        setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Axios.post('http://localhost:8800/api/auth/register', inputs).then((response)=> {
                console.log(response)
                console.log(inputs)
                setLogin(true)
                
            })
        } catch (err) {
            setErr(err.response.data)
        }
        
    }

    // const handleSubmit = async (e) => { // This is how we submit it to the backend
    //     e.preventDefault()

    //     try {
    //         const res = await Axios.post("/auth/register", {
                
    //             proxy: {
    //                 host: 'localhost',
    //                 port: 3000
    //               }, inputs
            
    //         }
    //         ) // we have the rest of the url as proxy in package.json
        

    //     }

    //     catch(err){
    //         console.log(err)
    //     }
        
    // }
    


  return (
    
    <div className='signup-box'>
        <h1>Signup</h1>
        <label htmlFor="username" >Username</label><br/>
        <input type="text" name="username"  id="username" placeholder='Username' className='nameInput' onChange={handleChange}></input><br/><br/>
        <label htmlFor="email" >Email</label><br/>
        <input type="email" name="email"  id="email" placeholder='Email' className='emailInput' onChange={handleChange}></input><br/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" name="password" placeholder='Password' id="password" className='passwordInput' onChange={handleChange}></input><br/>
        <button className='SignupButton' onClick={handleSubmit} >Sign Up</button>
    </div>
    
  )
}

export default Signup
