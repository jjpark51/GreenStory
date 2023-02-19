import React from 'react'
import '../../static/description.scss'

function Content() {
  return (
    <div className="youtube">
    <div className="youtubeText"><h1 style={{color: "green", fontSize: "30pt", fontWeight: "400"}}>More Content</h1></div>
    <div className="video1" ><iframe width="100%" height="400" src="https://www.youtube.com/embed/0sURyrysnP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <div className="video2" ><iframe width="100%" height="400" src="https://www.youtube.com/embed/Xawytnt5Fuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
  )
}

export default Content
