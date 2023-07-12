import React from 'react'

function Sec4() {
    return (
    <div>
        <section>
        <div className="mx-auto sec4 max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                <img alt="House" src="https://i.imgur.com/zndb5D9.png" className="absolute inset-0 h-full w-full object-cover" />
                </div>
            </div>

            <div className="relative flex items-center bg-stone-700 sec3-box box1">
                <span
                className="hidden box2 lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-stone-700"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-3xl font-bold sm:text-6xl">
                    About Me
                </h2>

                <p className="mt-4">

                    I'm Taylor, a passionate software engineer known for my creative thinking and exceptional problem-solving skills. Ever since my early exploration of Geocities, I've been captivated by the art of crafting immersive web experiences. Programming ignites a profound sense of pride and fulfillment within me, as I unleash my creativity, tackle intricate challenges, and relentlessly expand my knowledge in pursuit of excellence.
                </p>
                <div className="fancy-link"><a href="/about">Read More</a></div>

                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
    )
}

export default Sec4
