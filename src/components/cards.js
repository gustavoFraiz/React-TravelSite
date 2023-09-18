import React from 'react'

export default function Card(props){
    return(
    <div className="Div-Total">
        <div className="Div-Img">
            <img src={props.image} alt="Img"></img> 
        </div>
        <div className="Div-Texto">
            <img src={require("./marker.png")} alt="marker-icon"></img>
            <h3 className="location">{props.location}</h3>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
            <h1 className="Title">{props.title}</h1>
            <h2>{props.startDate} - {props.endDate}</h2>
            <p>{props.description}</p>
        </div>
    </div>
    )
}