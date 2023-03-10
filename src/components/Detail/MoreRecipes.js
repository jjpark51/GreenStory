import React, {useState, useEffect} from 'react'
import RecipeList from './RecipeList'
import BannerImg from '../../assets/img/banner.png'
import '../../static/morerecipe.scss'
import {FruitList} from '../../assets/test'
import line from '../../assets/img/line.png'
import CreateIcon from '@mui/icons-material/Create';
import Write from './Write'
import Axios from 'axios'
import CustomList from './CustomList'
import '../../static/profile.scss'

function MoreRecipes({ handleSelect, select}) {
    console.log(select)

    const [like, setLike] = useState(false)
    const [write, setWrite] = useState(false)

    const toggleLike = (e) => {
      setLike(e)
    }

    const fruit = FruitList.filter(e => {
        return e.name === select;
    })



    const toggleWrite = (e) => {
        setWrite(e)
    }

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
      }

    const [recipes, setRecipes] = useState([])

    const filterTest = recipes.filter(e => {
        return e.food === select
    })

    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                const res = await Axios.get("http://localhost:8800/api/recipe/")
                setRecipes(res.data)
            }catch(err) {
                console.log(err)
            }
        }
        fetchData()
    },[write])

    console.log(fruit)
    console.log(fruit[0].other)

    for(let i = 0; i < fruit[0].other.length; i++) {
        console.log(fruit[0].other[i].name)
    }
  return (
    <div className='more-wrapper'>
        <div className='banner-image' style={{backgroundImage: `url(${BannerImg})`}}><a>More Recipes</a></div>
        <div className='write'><CreateIcon onClick={() => setWrite(true)}/></div>

        {write === false ?

        fruit[0].other.map((e, key) => {
            return (
                <>
                <RecipeList 
                key={key}
                name={e.name}
                img={e.img}
                info={e.info}
                how={e.how} />
                <div className='line' style={{backgroundImage: `url(${line})`}}></div>
                <br/>
                </>
            )
        }) :
        <Write toggleWrite={toggleWrite} select={select}/>
    }
    { !filterTest.length || write === true ? <></>: <>
          {filterTest.map((recipes, key)=> {
        return(
            <>
        <CustomList
        key={key}
        name={recipes.title}
        img={recipes.img}
        info={getText(recipes.description)}
         />
         <div className='line' style={{backgroundImage: `url(${line})`}}></div>
         <br/>
         </>
        )} 
           
      )}      
        </>
   } </div>
  )
}

export default MoreRecipes
