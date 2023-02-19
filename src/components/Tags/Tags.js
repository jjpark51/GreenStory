import React, {useState, useEffect} from 'react'
import {FruitList} from '../../assets/test'
import Card from './Card'
import Detail from '../Detail/Detail'



function Tags({route, select, handleSelect}) {




    const filterTest = FruitList.filter(e => {
        return e.filter === 'test'
    })

    console.log(select)

    


  return (
    <>



      { select === '' ?
        <div className='main-body'>
                <div className='tag-title'>
                    <button className='tag-button'>
                        # Beauty Skin
                    </button>
                </div>

                <div className='sidebar'>
                    {FruitList.map((e, key) => {
                      return (
                        <Card
                        key={key}
                        name={e.name}
                        image={e.img}
                        color={e.color}
                        route={route}
                        handleSelect={handleSelect}/>
                        
                      )
                    })}

                </div>

                <div className='tag-title'>
                    <button className='tag-button'>
                        # Promote Digestion
                    </button>
                </div>

                <div className='sidebar'>
                {filterTest.map((e, key) => {
                      return (
                        <Card
                        key={key}
                        name={e.name}
                        image={e.img}
                        color={e.color}
                        route={route}
                        handleSelect={handleSelect}
                        />
                        
                      )
                    })}
                </div>

                <div className='tag-title'>
                    <button className='tag-button'>
                        # Hypertension Prevention
                    </button>
                </div>

                <div className='sidebar'>
                {FruitList.map((e, key) => {
                      return (
                        <Card
                        key={key}
                        name={e.name}
                        image={e.img}
                        color={e.color}
                        route={route}
                        handleSelect={handleSelect}

                  
                        
                        />
                        
                      )
                    })}

                </div>
              
            </div> :

            <Detail select={select} handleSelect={handleSelect}/>

          }
    </>
  )
}

export default Tags
