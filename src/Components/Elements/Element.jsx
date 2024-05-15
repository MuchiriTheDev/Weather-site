import React from 'react'
import wIcon from "../../assets/wind.png"
import hIcon from "../../assets/humidity.png"
import "./Element.css"
import propTypes from "prop-types"
const Element = (props) => {
  return (
    <div id='element'>
        <div className="element">
            <img src={wIcon} className="element-img" />
            <div className="details">
                <h3 className="name" id='wind'>Wind Speed</h3>
                <p className="measurement" id='speed'>{props.wind} km/hr</p>
            </div>
        </div>
        <div className="element">
            <img src={hIcon} alt="" className="element-img" />
            <div className="details">
                <h3 className="name" id='humidity'>Humidity</h3>
                <p className="measurement" id='hum-measure'>{props.humidity} g/kg</p>
            </div>
        </div>
    </div>
  )
}
Element.propTypes={
    wind : propTypes.number,
    humidity : propTypes.number,
}
Element.defaultProp = {
    wind : 20,
    humidity : 20,
}

export default Element