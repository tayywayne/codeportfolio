import React from "react";
import AOS from 'aos';

AOS.init({
    duration: 1200,
  })

function HomeAbout() {
    return(
        <div className="home-about">
            <div className="about-2">
                <div>
                    <h2>About Me</h2>
                    <p>I'm Taylor, a software engineer driven by creativity and problem-solving. From my early days exploring Geocities, I was hooked on the art of creating online. I enjoy pushing my imagination, solving complex tasks, and expanding my knowledge.</p>
                </div>
            </div>
        </div>
    )
}
export default HomeAbout