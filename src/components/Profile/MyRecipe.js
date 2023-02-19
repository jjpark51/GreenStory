import React , {useEffect, useState}  from 'react'
import '../../static/profile.scss'
import Axios from 'axios'


function MyRecipe() {

  const [recipes, setRecipes] = useState([])
  useEffect(()=> {
    const fetchData = async ()=> {
      try {
        const res = await Axios.get("http://localhost:8800/api/recipe/")
        console.log(res.data)
        setRecipes(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData();
  }, [])

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='recipe-wrapper'>
      {recipes.map((recipes)=> (
        <>
          <div className='recipe-img' key={recipes.id} style={{backgroundImage: `url(../../../upload/${recipes.img})`}}>
     
          </div>
          <div className='recipe-title'>
            {recipes.title}
            </div>
            <div className='recipe-info'>

            <p>{getText(recipes.desc)}</p>
            </div>
            </>
      ))}      
    </div>
  )
}

export default MyRecipe
