import React from "react";
import AOS from 'aos';

AOS.init({
    duration: 1200,
  })

function CurrentTech() {
    return(
        <div className="current-tech">
            <div className="ct-tech">
                <div className="ct-tech1">
                    <h2>Current Technologies</h2>
                    <p>Python / Java / JavaScrip / React / SQL / CSS / HTML</p>
                </div>
                <div className="ct-tech2">
                    <h2>Other Skills</h2>
                    <p>AngularJS / React Hooks / Redux Toolkit / Django / PostgreSQL / MongoDB / FastAPI / Bootstrap / Tailwind / DOM manipulation / WebSockets / RabbitMQ / Microservices / Domain-driven design / Message passing / Event sourcing</p>
                </div>
            </div>

        </div>
    )
}
export default CurrentTech