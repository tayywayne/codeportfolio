import React from 'react'

function Sec2() {
    return (
        <section className="text-white sec2">
    <div className="px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="">
        <h2 className="text-3xl font-bold sm:text-4xl">My Skills</h2>

        <p className="mt-4">
        As a full-stack web developer, I possess a repertoire of cutting-edge technologies and industry-leading skills. I am constantly staying up-to-date with the latest languages and frameworks that emerge in the ever-evolving tech landscape. By embracing new tools and staying ahead of trends, I ensure that I deliver robust and up-to-the-minute solutions to meet the demands of the modern web development landscape.
        </p>
        </div>

        <div
        className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
        >
        <div className="flex items-start gap-4">
            <span className="shrink-0 p-4">
                <img src='https://i.imgur.com/WVBfTd7.png' alt="content goes here"/>
            </span>

            <div>
            <h2 className="text-lg font-bold">Languages</h2>

            <p className="mt-1 text-sm text-gray-300">
            Python / JavaScript / SQL / HTML / CSS
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <span className="shrink-0 p-4">
            <img src='https://i.imgur.com/WQi1UCw.png' alt="content goes here"/>
            </span>

            <div>
            <h2 className="text-lg font-bold">Frameworks</h2>

            <p className="mt-1 text-sm text-gray-300">
            React / React Hooks / Redux Toolkit / Django / PostgreSQL / MongoDB / FastAPI / Bootstrap / Tailwind
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <span className="shrink-0 p-4">
            <img src='https://i.imgur.com/796OkOq.png' alt="content goes here"/>
            </span>

            <div>
            <h2 className="text-lg font-bold">Other</h2>

            <p className="mt-1 text-sm text-gray-300">
            DOM manipulation / WebSockets / RabbitMQ / Microservices / Domain-driven design / Message passing / Event sourcing
            </p>
            </div>
        </div>

        </div>
    </div>
    </section>
    )
}

export default Sec2
