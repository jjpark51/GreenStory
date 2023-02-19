import React from 'react';
import '../../static/description.scss'


function Description({select, fruit}) {

  console.log(fruit[0].name)
  return (
    <div className='title-wrapper'>
        <div className='food-title'>
        {fruit[0].name}
        </div>
        <div className='food-description'>
        {fruit[0].info}
        </div>
        <div className='food-image' style={{backgroundImage: `url(${fruit[0].img})`}}>
        </div>

    </div>
  )
}

export default Description
