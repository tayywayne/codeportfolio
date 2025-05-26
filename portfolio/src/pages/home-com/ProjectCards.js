import React from "react";
import p1 from './p1.png'
import qbss1 from './qbss1.png'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function ProjectCards() {
    return (
        <div className="projects">
            <div className="fun-text">
                <p>
                    I'm a{" "}
                    <motion.span
                        className="f1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        viewport={{ once: true }}
                    >
                        full-stack
                    </motion.span>{" "}
                    web developer with{" "}
                    <motion.span
                        className="f1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        viewport={{ once: true }}
                    >
                        mobile experience
                    </motion.span>{" "}
                    and a love for{" "}
                    <motion.span
                        className="f1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        viewport={{ once: true }}
                    >
                        creativity
                    </motion.span>
                    .
                </p>
            </div>
            <h2>Projects</h2>
            <div className="project-card">
                <Link to='/QuiltBlocker'><img src={qbss1} alt="Quilt Blocker" /></Link>
                <h3>Quilt Blocker</h3>
                <p>A dynamic, React-based web application that lets you design custom quilt blocks and visualize full quilts in real time!</p>
            </div>

            <div className="project-card">
                <Link to='/FriendForge'><img src={p1} alt="friend forge" /></Link>
                <h3>Friend Forge</h3>
                <p>An innovative application that connects users based on their shared interests.</p>
            </div>
        
        </div>
    );
}

export default ProjectCards;