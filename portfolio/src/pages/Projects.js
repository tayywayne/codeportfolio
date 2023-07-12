import React from 'react'
import './secstyle.css'

function Projects() {
    return (
        <div>
            <section className="text-gray-600 body-font pro-page">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">All Projects</h1>
                    <div className="h-1 w-20 bg-stone-500"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed">My portfolio comprises of a diverse range of projects that demonstrate my expertise in developing end-to-end web applications from scratch. These projects serve as a testament to my proficiency in full-stack development, showcasing my ability to create robust and comprehensive solutions.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 pro-card">
                    <img className="h-40 w-full object-cover object-center mb-6 project-img" src="https://i.imgur.com/JQHS4TQ.png" alt="content goes here"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Full Stack Team Project</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Friend Forge</h2>
                    <p className="leading-relaxed text-base">An innovative application that connects users based on their shared interests and hobbies.</p>
                    <a className="inline-flex items-center mt-4" href='/projects/friendforge'>Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 pro-card">
                    <img className="h-40 w-full object-cover object-center mb-6 project-img" src="https://i.imgur.com/hkDbb3q.png" alt="content goes here"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">React App</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Portfolio</h2>
                    <p className="leading-relaxed text-base">Fully custom built portfolio website, designed to showcase my skills and experience.</p>
                    <a className="inline-flex items-center mt-4" href='/projects'>Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 pro-card">
                    <img className="h-40 w-full object-cover object-center mb-6 project-img" src="https://dummyimage.com/722x402" alt="content goes here"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    <a className="inline-flex items-center mt-4" href='/projects'>Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 pro-card">
                    <img className="h-40 w-full object-cover object-center mb-6 project-img" src="https://dummyimage.com/723x403" alt="content goes here"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    <a className="inline-flex items-center mt-4" href='/projects'>Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Projects
