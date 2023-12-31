import React from 'react'
import './secstyle.css'
import car1 from '../projects/images/car1.png'
import martin2 from '../projects/images/martin2.png'

function Projects() {
    return (
        <div>
            <section className="body-font pro-page">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">All Projects</h1>
                    <div className="h-1 w-20 bg-white"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed">My portfolio comprises of a diverse range of projects that demonstrate my expertise in developing end-to-end web applications from scratch. These projects serve as a testament to my proficiency in full-stack development, showcasing my ability to create robust and comprehensive solutions.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                <div className="w-1/2 p-4">
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

                <div className="w-1/2 p-4">
                    <div className="bg-gray-100 p-6 pro-card">
                    <img className="h-40 w-full object-cover object-center mb-6 project-img" src={car1} alt="content goes here"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Full Stack Duo Project</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">CarCar</h2>
                    <p className="leading-relaxed text-base">A dealership management system, allowing dealerships to track sales, appointments, and more.</p>
                    <a className="inline-flex items-center mt-4" href='/projects/carcar'>Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>

                <div className="w-1/2 p-4">
                    <div className="bg-gray-100 p-6 pro-card">
                    <img className="h-40 w-full object-cover object-center mb-6 project-img" src={martin2} alt="content goes here"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Full Stack Project</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Martin Time Shop</h2>
                    <p className="leading-relaxed text-base">A custom shop that allows users to signup and purchase products, leave reviews and admins can manage the shop.</p>
                    <a className="inline-flex items-center mt-4" href='/projects/Martin'>Learn More
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
