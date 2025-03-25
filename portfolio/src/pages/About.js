import React from "react";
import heropfp from './home-com/hero-pfp.png';
import Edu from "./home-com/Edu"

function About() {
    return (
        <div className="page-body">
            <div className="about-main">

                <div className="about-header">
                    <div>
                        I'm Taylor
                        <br></br>
                        Wayne
                    </div>
                    <div>
                        <img src={heropfp} alt="profile pic" className="about-pfp" />
                    </div>
                </div>

                <div className="about-slogan">
                    I'm a full-stack software engineer from the greater Seattle area and I'm excited to embark on my next programming journey!
                </div>

                <div>
                    <ul>
                        <li>I am open to <span className="f1">new positions</span>.</li>
                        <li>I am currently working on my <span className="f1">BS in Software Engineering</span>.</li>
                        <li>I have a background in <span className="f1">restaurant management</span> but left the field to follow my heart into technology.</li>
                        <li>I first started <span className="f1">playing with code</span> when I was only 10 years old! It has become a lifelong love.</li>
                    </ul>
                </div>

                <div>
                As a software engineer, I like to focus on the creative side of software. Building out new solutions to classic problems, finding more optimized way of doing something or just creating great user experiences. Programming allows me the opportunity to balance that creativity with my love for puzzles.
                    <br/><br/>
                    While I have studied quite a few languages and frameworks, I tend to gravitate more towards JavaScript, React, Python and Django. I have a love for learning and enjoy taking on new languages and frameworks in my freetime to explore what's possible and maybe even add something new to my stack.
                </div>
            </div>
            <Edu />

        </div>
    );
}

export default About;