import React from "react";
import p1 from './home-com/p1.png'
import { Link } from "react-router-dom";

function Projects() {
    return(
        <div className="page-body">
            <div className="project-card">
                <Link to='/FriendForge'><img src={p1} alt="friend forge" /></Link>
                <h3>Friend Forge</h3>
                <p>An innovative application that connects users based on their shared interests.</p>
            </div>
        </div>
    )
}
export default Projects