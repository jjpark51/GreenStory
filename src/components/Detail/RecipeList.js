import React, {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {FruitList} from '../../assets/test'

import '../../static/description.scss'


function RecipeList({name, img, info, how}) {

    console.log(name, img, info, how)


  return (
<div className='recipe-container'>
    <div className='recipe-title'>
    <h1>{name}</h1>    
    </div>
    <div className='recipe-info'>
        {info}
    </div>
    <div className='recipe-steps'><h2>How To Make</h2>
    {how.map((e,key) => {
        return(
            <p>{`${key + 1}. ${e}`}</p>
        )
        })
    }

        </div>
        <div className='recipe-image' style={{backgroundImage: `url(${img})`}}></div>
              
</div>
  )
}

export default RecipeList
