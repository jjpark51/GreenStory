import React , {useEffect, useState}  from 'react'
import '../../static/profile.scss'
import '../../static/description.scss'



function MyRecipe({name, img, info}) {

 
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='recipe-container'>
  <div className='recipe-title'>
  <h1>{name}</h1>    
  </div>
  <div className='recipe-info'>
      {getText(info)}
  </div>
      <div className='recipe-image' style={{backgroundImage: `url(./upload/${img})`}}></div>
            
</div>
  )
}

export default MyRecipe
