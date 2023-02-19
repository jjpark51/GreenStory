import React from 'react'
import Card from '../Tags/Card'
import {FruitList} from "../../assets/test"
import Detail from '../Detail/Detail'

function Color({route, select, handleSelect}) {

    const filterTest = FruitList.filter(e => {
        return e.filter === 'test'
    })

  return (
    <>

    {select === '' ? 
<div className='main-body'>
        <div className='tag-title' style={{"color" : "green"}}>
                Green
        </div>

        <div className='sidebar'>
            {FruitList.map((e, key) => {
              return (
                <Card
                key={key}
                name={e.name}
                image={e.img}
                color={e.color}
                handleSelect={handleSelect} />
                
              )
            })}

        </div>

        <div className='tag-title' style={{"color" : "red"}}>
                Red
        </div>

        <div className='sidebar'>
        {filterTest.map((e, key) => {
              return (
                <Card
                key={key}
                name={e.name}
                image={e.img}
                color={e.color}
                handleSelect={handleSelect} />
                
              )
            })}
        </div>

        <div className='tag-title' style={{"color" : "purple"}}>
                Purple
        </div>

        <div className='sidebar'>
        {FruitList.map((e, key) => {
              return (
                <Card
                key={key}
                name={e.name}
                image={e.img}
                color={e.color}
                handleSelect={handleSelect} />
                
              )
            })}

        </div>
      
    </div>
     :

    <Detail select={select} handleSelect={handleSelect} />

          }
      
    </>
  )
}

export default Color
