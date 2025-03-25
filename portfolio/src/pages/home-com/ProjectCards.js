import React from "react";
import p1 from './p1.png'
import { Link } from "react-router-dom";

function ProjectCards() {
    return(
        <div className="projects">
            {/* <div className="fun-text">
                <p>I love <span className="f1 highlight">learning new things</span>, <span className="f2 highlight">pushing my creative skills</span>, and <span className="f3 highlight">solving complex problems</span>.</p>
            </div> */}
            <h2>Projects</h2>
            <div className="project-card">
                <Link to='/FriendForge'><img src={p1}/></Link>
                <h3>Friend Forge</h3>
                <p>An innovative application that connects users based on their shared interests.</p>
            </div>
        </div>
    )
}
export default ProjectCards