import React from "react";
import locationIcon from './assets/location.svg'
export default function(props){
    console.log(props)
    const {data} = props;
    const {location,googleMapsUrl,title,startDate,endDate,description,imageUrl} = data;
    return (
        <div className="journal">
            <div className="img">
                <img src={imageUrl} alt="" />
            </div>
            <div className="details">
                <div className="location">
                    <img src={locationIcon} alt="" className="locationIcon" />
                    <span className="country">{location}</span>
                    <a href={googleMapsUrl}>view on google maps</a>
                </div>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="dates">
                    <span className="startDate">{startDate} - </span>
                    <span className="endDate">{endDate}</span>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}