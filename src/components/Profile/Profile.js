import React, {useState} from 'react'
import '../../static/profile.scss'
import Banner from '../../assets/img/banner.jpg'
import MyRecipe from './MyRecipe';
import LikeRecipe from './LikeRecipe';

function Profile() {

    const [recipe, setRecipe] = useState(false)

    const toggleRecipe = (e) => {
        setRecipe(e)
    }
  return (
    <div className='profile-wrapper' >

        <div className='banner-img' style={{backgroundImage: `url(${Banner})`}}></div>
        <div className='profile-bar'>
            <div className='leftside' onClick={() =>toggleRecipe(false)}>My Recipe</div>
            <div className='rightside' onClick={() => toggleRecipe(true)}>Liked Recipes</div>
        </div>

        {recipe === false ?

        <MyRecipe /> : 

        <LikeRecipe />
        
    }

      
    </div>
  )
}

export default Profile
