import React from 'react'
import '../../static/description.scss'

function CustomList({name, img, info}) {

  return (


<div className='recipe-container'>
  <div className='recipe-title'>
  <h1>{name}</h1>    
  </div>
  <div className='recipe-info'>
      {info}
  </div>
      <div className='recipe-image' style={{backgroundImage: `url(../../../public/upload/${img})`}}></div>
            
</div>
  )
}

export default CustomList
