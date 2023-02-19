import React, {useState} from 'react'
import '../../static/card.scss'
import Detail from '../Detail/Detail'
import {Link} from 'react-router-dom';


function Card({ name, image, route, handleSelect}) {

    // Here we indicate that we are going to use handleSelect to decide the specific detail that we are going to go in


  return (


        <>

        
    

            <div className='card' onClick={() => handleSelect(name)}> 
                <div className='card-image' style={{backgroundImage: `url(${image})`}}>
                    
                </div>

                <div className='card-title'>
                    {name}
                </div>


            </div>



        </>

        
  )
}

export default Card
