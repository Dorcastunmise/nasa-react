import React from "react";
import Setting from "./General-info-about-them";
import './AboutThem.css'
import image from "./Neil-Armstrong-pose.jpg";
import female from "./first-female.jpg";
import young from "./Stella-Felix.jpg";


function AboutThem() {
    return (
        <div className="contacts">
            <Setting 
                img={image} 
                name="Late Neil Armstrong"
                word="Our very first astronaut to land on the moon.
                    We miss you....really miss you."
            />
            <Setting 
                img={female}
                name="Sally k Ride"
                word="The first female astronaut in space. 
                Her performance and skill, 
                alongside her four male crewmates,
                made her a symbol of equality."
            />
            <Setting
                img={young}
                name="Stella Felix (First Nigerian)"
                word='Stella: "I feel very happy and I also feel
                like a role model. 
                I know that this will create awareness to other 
                students and make them have more interest in 
                space science and technology education."'
            />
        </div>
    )
}

export default AboutThem