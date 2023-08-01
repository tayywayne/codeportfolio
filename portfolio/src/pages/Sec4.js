import React, { useEffect } from 'react';

function Sec4() {
    useEffect(() => {
        function adjustMarquee() {
            const container = document.querySelector(".marquee-container");
            const text = document.getElementById("marqueeText2");

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
    <div>
        <div className="marquee-container2">
            <div className="marquee-text2" id="marqueeText2">
                Python / JavaScript / SQL / HTML / CSS / React / React Hooks / Redux Toolkit / Django / PostgreSQL / MongoDB / FastAPI / Bootstrap / Tailwind / Python / JavaScript / SQL / HTML / CSS / React / React Hooks / Redux Toolkit / Django / PostgreSQL / MongoDB / FastAPI / Bootstrap / Tailwind
            </div>
        </div>

        <div class="cc-para relative bg-cover bg-center bg-no-repeat"></div>


        <div className='py-8 px-3 sec4'>
            <h2 className="text-3xl font-bold sm:text-6xl">About Me</h2>
            <p className="mt-4">
                I'm Taylor, a passionate software engineer known for my creative thinking and exceptional problem-solving skills. Ever since my early exploration of Geocities, I've been captivated by the art of crafting immersive web experiences. Programming ignites a profound sense of pride and fulfillment within me, as I unleash my creativity, tackle intricate challenges, and relentlessly expand my knowledge in pursuit of excellence.
            </p>

            <div className="mt-12 text-center">
                <a href="/about" className="seemore2" >
                    Read More
                </a>
            </div>

        </div>
    </div>
    )
}

export default Sec4
