import React from 'react'
import Description from './Description';
import Info from './Info';
import Benefits from './Benefits'
import Recipe from './Recipe';
import Content from './Content'
import '../../static/detail.scss'
import line from '../../assets/img/line.png'
import {FruitList} from '../../assets/test'

function Detail({select, handleSelect}) {

  // The select variable indicates which type of fruit the user picked on
  const selectFruit = FruitList.filter(e => {
    return e.name === select;
})


  return (
    <div className='wrapper'>
        <Description select={select} fruit={selectFruit}/>
        <Info select={select} fruit={selectFruit}/>
        < Benefits select={select} fruit={selectFruit}/>
        <Recipe select={select} fruit={selectFruit} handleSelect={handleSelect}/>
        <Content select={select} fruit={selectFruit}/>
      
    </div>
  )
}

export default Detail
