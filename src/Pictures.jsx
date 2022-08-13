import React from "react";
import video from './space.gif';
import './Pictures.css';

function Pictures() {
    return (
        <section>
            <img src={video} className="space"></img>
            <br></br>
                <p className="notes">
                “Space is for everybody. 
                It's not just for a few people in science or math, or for a select group of astronauts. <br></br>
                That's our new frontier out there, and it's everybody's business to know about space.
                During that time, there will be advances in nanotechnology, space sailing, robotics, 
                biomolecular engineering, and artificial intelligence.
                Part of life's mystery depends on future possibilities, 
                and mystery is an elusive quality which evaporates when sampled frequently, to be followed by boredom".
                </p>
        </section>
    )
}
export default Pictures