import React, { useEffect } from 'react';
import home1 from './home1.jpg';

function Sec1() {
  useEffect(() => {
    function adjustMarquee() {
      const container = document.querySelector(".marquee-container");
      const text = document.getElementById("marqueeText");

      text.style.animationDuration = "300s";

      const containerWidth = container.offsetWidth;
      const textWidth = text.offsetWidth;

      if (textWidth > containerWidth) {
        const duration = (textWidth / containerWidth) * 10;
        text.style.animationDuration = `${duration}s`;
      }
    }

    adjustMarquee();
    window.addEventListener("resize", adjustMarquee);

    return () => {
      window.removeEventListener("resize", adjustMarquee);
    };
  }, []);

  return (
    <>
      <div className="marquee-container">
        <div className="marquee-text" id="marqueeText">
          Python / JavaScript / SQL / HTML / CSS / React / React Hooks / Redux Toolkit / Django / PostgreSQL / MongoDB / FastAPI / Bootstrap / Tailwind / Python / JavaScript / SQL / HTML / CSS / React / React Hooks / Redux Toolkit / Django / PostgreSQL / MongoDB / FastAPI / Bootstrap / Tailwind
        </div>
      </div>

      <div className="relative bg-cover bg-center bg-no-repeat sec1 aa-para">
        <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="text-center">
            <h1>TAYLOR WAYNE</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec1;
