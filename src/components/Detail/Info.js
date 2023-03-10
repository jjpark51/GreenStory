import React from 'react'
import '../../static/description.scss'

function Info({select, fruit}) {
  return (
    <div>
      <div className='title-wrapper'>
        <div className='nutrients'>
       <b style={{fontSize: '16pt'}}>Nutrients:</b><br/> {fruit[0].nutrient.map((e,key) => {
          return(<>
            <a style={{marginRight: "9px"}}>{e}</a>
            
            </>
          )
        })}
        </div>
        <div className='food-description'>
        <b style={{fontSize: '16pt'}}>How To Pick: </b><br/>
        {fruit[0].pick}
        </div>
        <div className='food-image'>
          <b style={{fontSize: '16pt'}}>Season: </b> <br/>
          {fruit[0].season}
        </div>

    </div>
    </div>
  )
}

export default Info
