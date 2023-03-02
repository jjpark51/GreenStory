import React , {useState, useEffect} from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import '../../static/morerecipe.scss'
import Axios from 'axios'
import { Navigate , useLocation} from 'react-router-dom'
import { selectClasses } from '@mui/material'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Write({toggleWrite, select}) {

    const state = useLocation().state;
    const [value, setValue] = useState( "")
    const [title, setTitle] = useState("")
 
    const [file, setFile] = useState(null);
    const [food, setFood] = useState(select)
    const [user, setUser] = useState([]);

    const { currentUser } = useContext(AuthContext);



    console.log("This is the fruit for the write page")
    console.log(select)

    const upload = async ()=> {
      try {
        const formData = new FormData();
        formData.append('file', file)
        const res = await Axios.post('http://localhost:8800/api/upload', formData)
        return res.data
      }catch (err) {
        console.log(err)
      }
    }


  useEffect(() => {
    Axios.get('http://localhost:8800/api/auth/username')
      .then(response => {
        console.log("This is the user data")
        console.log(response.data)
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
    
    const handleClick = async (e)=> {
      e.preventDefault()
      const imgUrl = await upload()


      try {

        await Axios.post('http://localhost:8800/api/recipe/', {
          title,
          desc: value,
          img: file ? imgUrl: "",
          food: food,
          user: currentUser.username
        }).then((response)=> {
          console.log(response)
          console.log(value)

          toggleWrite(false)

          
      })
      }catch(err){
        console.log(err)

      }
    }

  return (
    <div className='write-box'>
        <div className='write-title'>

            <input typeof='text' placeholder='Title' onChange={e => setTitle(e.target.value)}></input>
        </div>
        <div className='editorWrapper'>
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />

        </div>
        
        <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />           
            <label className="file" htmlFor="file">
            Upload Image
          </label>

            <br/>
          <button className='submit' onClick={ /*toggleWrite(false); */handleClick}>Submit</button>
        
    </div>
  )
}

export default Write

