import React from "react";
import { Link } from "react-router-dom";
import qbss1 from '../pages/home-com/qbss1.png';


function FriendForge() {
    return(
        <div className="project-body">
            <Link to='/' className="back-button">⤶</Link>
            <h1>QuiltBlocker</h1>
            <a href="https://github.com/tayywayne/QuiltBlocker" className="repo-link" target="_blank">Repository</a> Or <a href="https://quiltblocker.taywayne.dev/" className="repo-link" target="_blank">Live Demo</a>
            <p>A dynamic, React-based web application that lets you design custom quilt blocks and visualize full quilts in real time!</p>
            <img src={qbss1} className="project-main-img" alt="quilt blocker"/>

            <div className="project-info">
                <div>
                    <h2>Role</h2>
                    <span>Full-Stack Devloper</span>
                </div>
                <div>
                    <h2>Technologies</h2>
                    <span>JavaScript / React / React Router / HTML5 / GIT / CSS</span>
                </div>
            </div>

            <p>
                Like many quilters, I got my start with a little help from my grandma. She's been a huge supporter throughout my programming journey. One day, while she was teaching me to quilt, she said something that stuck with me: "I wish there was a simple way to see what a quilt would look like before cutting all the pieces."
                <br></br>
                <br></br>
                That idea sparked the creation of QuiltBlocker, a tool designed to help quilters visualize and experiment with quilt designs digitally before ever touching fabric.
                With QuiltBlocker, users can create custom quilt blocks using popular patterns, choose their own colors (and eventually fabric patterns too!), and assemble full quilts to see how the blocks work together visually.
                Currently, all data is stored locally in the browser, but I have plans to build out a full backend in the future.
            </p>
            {/* <img src={ff2} className="project-sec-img" alt="friend forge"/> */}
            <h2>Features</h2>
            <span> 
                <ul>
                    <li>Design and store custom quilt blocks</li>
                    <li>Build full quilts with custom dimensions using your saved blocks</li>
                    <li>Visualize how block patterns and colors interact in real time</li>
                    <li>Simple, clean, and intuitive UI for smooth navigation</li>
                </ul>
            </span>
        </div>
    )
}
export default FriendForge