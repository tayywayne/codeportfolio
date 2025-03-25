import React from "react";
import { Link } from "react-router-dom";

function LittleNav() {
    return(
        <div className="nav-position">
            <div className="little-nav">
                <div>
                    <Link to='/' className="little-nav-link">HOME</Link>
                </div>
                <div>
                    <Link to='/Projects' className="little-nav-link">PROJECTS</Link>
                </div>
                <div>
                    <Link to='/About' className="little-nav-link">ABOUT</Link>
                </div>
            </div>
        </div>
    )
}
export default LittleNav