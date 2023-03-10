import { style } from '@mui/system';
import React from 'react'
import '../../static/description.scss'

function CustomList({name, img, info}) {

  console.log(img)

  const imageStyles = {
    width: '200px',
    height: '100px',
  };

  return (


<div className='recipe-container'>
  <div className='recipe-title'>
  <h1>{name}</h1>    
  </div>
  <div className='recipe-info'>
      {info}
  </div>
  <div className='recipe-image' ><img src={`../upload/${img}` } style={{height: '200px', width: '200px', borderRadius: '14px'} } alt="Failed" /></div>
  
            
</div>
  )
}

export default CustomList
