import React from 'react'
import "./feature.css"
const Feature = ({ title, info, state }) => {
    const featureDisplay = {
        flexDirection: state == "row" ? "row" : "column",
    }
    return (
        <div className='feature' style={featureDisplay}>
            {
                title &&
                <div className='feature-title-container'>
                    <div></div>
                    <h3 className=''>{title}</h3>
                </div>
            }
            {info && <div className='feature-info'><p>{info}</p></div>}
        </div>
    )
}

export default Feature