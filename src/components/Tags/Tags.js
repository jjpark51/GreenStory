import React, {useState, useEffect} from 'react'
import {FruitList} from '../../assets/test'
import Card from './Card'
import Detail from '../Detail/Detail'
import '../../static/tag.scss'



function Tags({route, select, handleSelect}) {




    const filterTest = FruitList.filter(e => {
        return e.filter === 'test'
    })

    const skinFilter = FruitList.filter(e=> {
      return e.effect.includes('Beauty Skin')
    })

    const digestFilter = FruitList.filter(e=> {
      return e.effect.includes("Promote Digestion")
    })

    const hypertensionFilter = FruitList.filter(e=> {
      return e.effect.includes("Hypertension Prevention")
    })

    const coldFilter = FruitList.filter(e=> {
      return e.effect.includes("Cold Prevention")
    })

    const arterioFilter = FruitList.filter(e=> {
      return e.effect.includes("Prevention of Arteriosclerosis")
    })

    const eyeFilter = FruitList.filter(e=> {
      return e.effect.includes("Eyesight Recovery")
    })
    console.log(select)

    


  return (
    <>



      { select === '' ?
        <div className='main-body'>
                <div className='tag-title'>
                    <button className='tag-button'>
                        # Healthy Skin
                    </button>
                </div>

                <div className='sidebar'>
                    {skinFilter.map((e, key) => {
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
                {digestFilter.map((e, key) => {
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
                        # Eyesight Recovery
                    </button>
                </div>

                <div className='sidebar'>
                {eyeFilter.map((e, key) => {
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
                        # Cold Prevention
                    </button>
                </div>

                <div className='sidebar'>
                {coldFilter.map((e, key) => {
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
                {hypertensionFilter.map((e, key) => {
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
                        # Prevention of Arteriosclerosis
                    </button>
                </div>

                <div className='sidebar'>
                {arterioFilter.map((e, key) => {
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
