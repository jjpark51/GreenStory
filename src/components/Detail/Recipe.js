import React , {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {Link} from 'react-router-dom';
import '../../static/description.scss'

function Recipe({fruit, handleSelect, select}) {

  const [recipeToggle, setRecipeToggle] = useState(false)
  const [like, setLike] = useState(false)

  const toggleLike = (e) => {
    setLike(e)
  }

  console.log(fruit)
  console.log(select)

  return (
            <div className='recipe-container'>
              <div className='headfont'><a style={{color: "green", fontSize: "30pt", fontWeight : "400"}}>Recipes</a> <Link to='/morerecipe' action='replace' onClick={()=> handleSelect(select)} ><AddBoxIcon /> </Link ><br/></div>
              <div className='recipe-title'>
              <h1>{fruit[0].recipe.name} {like === false ? <FavoriteBorderIcon style={{color: 'red'}} onClick={()=> toggleLike(true)}/> : <FavoriteIcon style={{color: 'red'}} onClick={()=> toggleLike(false)}/>} </h1>
              </div>
              <div className='recipe-info'>{fruit[0].recipe.info}</div>
              <div className='recipe-steps'><h2>How To Make</h2>
              {fruit[0].recipe.how.map((e,key) => {
                return (
                  <p>{`${key +1}. ${e}`}</p>
                )
              })}
              
              </div>
              <div className='recipe-image' style={{backgroundImage: `url(${fruit[0].recipe.img})`}}></div>


        </div>

  )
}

export default Recipe
