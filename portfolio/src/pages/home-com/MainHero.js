import React from "react";
import heropfp from './hero-pfp.png'

function MainHero() {
    return(
        <div>
            <div className="main-hero">
                <div className="hero-1">
                    <img src={heropfp}/>
                </div>
                <div className="hero-2">
                    <h3>Hello, I'm</h3>
                    <h1>Taylor Wayne</h1>
                    <h3>I'm a software enginear</h3>
                </div>
            </div>
        </div>

        
    )
}
export default MainHero