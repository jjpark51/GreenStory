import React from 'react'
import '../../static/description.scss'

function Content({select, fruit}) {
  return (
    <div className="youtube">
    <div className="youtubeText"><h1 style={{color: "green", fontSize: "30pt", fontWeight: "400"}}>More Content</h1></div>
    <div className="video1" >{fruit[0].youtube[0]}</div>
    <div className="video2" >{fruit[0].youtube[1]}
    </div>
</div>
  )
}

export default Content
