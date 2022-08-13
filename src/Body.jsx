import React from "react";
import photo from './Neil-Armstrong-pose.jpg';
import star from './star-icon.jpg';

function Body() {
    return (
        <div className='card'>
            <div>
              <img src={photo} className="neil"></img>
            </div>
            <div className="paragraph">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Neil Armstrong</p>
            <p>Our very first Astronaut in space</p>
        </div>
    )
}
export default Body