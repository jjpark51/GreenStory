import React from 'react'
import Card from '../Tags/Card'
import {FruitList} from "../../assets/test"
import Detail from '../Detail/Detail'
import { purple } from '@mui/material/colors'

function Color({route, select, handleSelect}) {

    const greenFilter = FruitList.filter(e => {
        return e.color === 'Green'
    })
    const redFilter = FruitList.filter(e => {
      return e.color === 'Red'
  })
  const yellowFilter = FruitList.filter(e => {
    return e.color === 'Yellow'
})

const whiteFilter = FruitList.filter(e=> {
  return e.color === 'White'
})

const orangeFilter = FruitList.filter(e=> {
  return e.color === 'Orange'
})

  return (
    <>

    {select === '' ? 
<div className='main-body'>
        <div className='tag-title' style={{"color" : "green"}}>
                Green
        </div>

        <div className='sidebar'>
            {greenFilter.map((e, key) => {
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
        {redFilter.map((e, key) => {
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
                Yellow
        </div>

        <div className='sidebar'>
        {yellowFilter.map((e, key) => {
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
              White
        </div>

        <div className='sidebar'>
        {whiteFilter.map((e, key) => {
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
                Orange
        </div>

        <div className='sidebar'>
        {orangeFilter.map((e, key) => {
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
