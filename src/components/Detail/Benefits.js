import React from 'react'
import '../../static/benefits.scss'


function Benefits({fruit}) {
  return (
    <div>
            <div className="benefits">
            <div className="benefitText">       <h1 style={{color: "green", fontSize: "30pt", fontWeight : "400"}}>Benefits</h1></div><br/>
            <div className="benefitCircle" id="detail_benefit1">{fruit[0].effect[0]}</div>
            <div className="benefitCircle" id="detail_benefit2">{fruit[0].effect[1]}</div>
            <div className="benefitCircle" id="detail_benefit3">{fruit[0].effect[2]}</div>
            <div className="benefitCircle" id="detail_benefit4">{fruit[0].effect[3]}</div>

     
        </div>
    </div>
  )
}

export default Benefits
