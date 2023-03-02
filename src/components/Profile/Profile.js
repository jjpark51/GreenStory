import React, {useState, useEffect} from 'react'
import '../../static/profile.scss'
import Banner from '../../assets/img/banner.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyRecipe from './MyRecipe';
import TodayRecipe from './TodayRecipe';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import Axios from 'axios'

function Profile() {

    const [recipe, setRecipe] = useState(false)

    const toggleRecipe = (e) => {
        setRecipe(e)
    }

    const [list, setList] = useState([])

    const [user, setUser] = useState([])

    const location = useLocation();

    const { currentUser } = useContext(AuthContext);

    console.log(currentUser)
      
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await Axios.get(`http://localhost:8800/api/recipe/`);
          setList(res.data);
          console.log("This is the recipe list")
          console.log(list)
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);


    const myFilter = list.filter(e => {
      return e.user === currentUser.username
  })

  const likeFilter = list.filter(e => {
    return e.user === currentUser.username
  })

  console.log("This is the filtertest")
  console.log(myFilter)


    const getText = (html) =>{
      const doc = new DOMParser().parseFromString(html, "text/html")
      return doc.body.textContent
    }

  
  return (
    <div className='profile-wrapper' >

        <div className='banner-img' style={{backgroundImage: `url(${Banner})`}}></div>
        <div className='profile-bar'>
            <div className='leftside' onClick={() =>toggleRecipe(false)}>My Recipe</div>
            <div className='rightside' onClick={() => toggleRecipe(true)}>Today's Recipe</div>
        </div>

        {recipe === false ?

            myFilter.map((list, key)=> {
              return(
              <MyRecipe
              key={key}
              name={list.title}
              img={list.img}
              info={getText(list.desc)}
              />
              )} 
                
            )      : 

        <TodayRecipe />
        
    }

      
    </div>
  )
}

export default Profile
