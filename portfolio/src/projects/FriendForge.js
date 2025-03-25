import React from "react";
import { Link } from "react-router-dom";
import p1 from '../pages/home-com/p1.png'
import ff1 from './ff1.gif'
import ff2 from './ff2.gif'

function FriendForge() {
    return(
        <div className="project-body">
            <Link to='/' className="back-button">⤶</Link>
            <h1>Friend Forge</h1>
            <a href="/" className="repo-link" target="_blank">Repository</a>
            <p>An innovative application that connects users based on their shared interests.</p>
            <img src={p1} className="project-main-img" alt="friend forge"/>

            <div className="project-info">
                <div>
                    <h2>Role</h2>
                    <span>Full-Stack Devloper</span>
                </div>
                <div>
                    <h2>Technologies</h2>
                    <span>FastAPI / React / SQL / Tailwind / DaisyUI / PostgresQL</span>
                </div>
            </div>

            <p>
                Friend Forge is an innovative social networking platform that fills the gap between meetup and bumble by providing a unique matchmaking experience. Unlike traditional platforms, Friend Forge dynamically connects users with five other individuals who share similar interests, creating meaningful connections.
                <br></br>
                <br></br>
                Developed by a skilled team of four, the application leverages cutting-edge technologies such as FastAPI for robust back-end functionality and Tailwind for sleek front-end design. By focusing on fostering genuine friendships, Friend Forge offers users the opportunity to sign up, create profiles, and enter the captivating "Forge," where they are matched with open groups that align with their shared interests.
            </p>
            <img src={ff2} className="project-sec-img" alt="friend forge"/>
            <h2>Join Other Users in Groups</h2>
            <span>Once a user signs up and fill out their profile, they can join a group that has an open spot with other like minded people!</span>
            <img src={ff1} className="project-sec-img" alt="friend forge"/>
            <h2>Chat with your new friends</h2>
            <span>Users can chat with their new friends in realtime chat, add them as a friend and see their profile!</span>
            
        </div>
    )
}
export default FriendForge