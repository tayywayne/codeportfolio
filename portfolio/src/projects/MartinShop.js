import React from 'react'
import martin1 from './images/martin1.png'
import martin2 from './images/martin2.png'
import martin3 from './images/martin3.png'

function Martin() {
    return (
        <div className='project-page'>
            <div>
                <div className="mx-auto max-w-screen-xl px-4 py-16">
                    <div className='pb-10'>
                        <img className='w-full' alt="Party" src={martin1} />
                    </div>
                    <div className="w-screen">
                    <h2 className="text-4xl font-bold sm:text-5xl">
                        Martin Time Shop
                    </h2>
                    </div>

                    <div className="mt-8">

                    {/* <div className="lg:py-16">

                        <div className="mb-6">

                            <div className="text-center"><a href='https://gitlab.com/taywayne/car-car-management' rel="noreferrer noopener" target="_blank">Repo</a></div>
                        </div>
                        <article className="space-y-4">
                        <p>
                        CarCar is a full-stack development project that was created by a duo team. The application is designed to be a comprehensive automobile dealership management system, allowing dealerships to track sales, service appointments, employees, and more. <br/><br/>

                        The project focused on a robust backend that utilized multiple microservices. These microservices polled in appropriate data from the other databases and connected it all on the front end for users to interact with. This approach allowed for a more scalable and maintainable system. The front end of the application was built using React.js, and the backend was built using Python and Django. <br/><br/>

                        CarCar is a powerful tool that can help dealerships to streamline their operations and improve their efficiency. The project is a testament to the skills and dedication of the duo team that created it. <br/><br/>

                        </p>
                        </article>

                        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

                            <div className="h-32 text-center">
                                <h3>Role</h3>
                                <p>Full-Stack Devloper</p>
                            </div>

                            <div className="h-32 text-center">
                                <h3>Technologies</h3>
                                <p>Django / React / Bootstrap / Python / Javascript / HTML / CSS</p>
                            </div>

                            <div className="h-32 text-center">
                                <h3>Timeline</h3>
                                <p>March '23</p>
                            </div>

                        </div>

                    </div> */}
                    </div>
                </div>
            </div>





    {/* <div className="tech-stack"  id="para4">
        <div className="container pt-10 mx-auto">
            <div className="flex items-center mx-auto py-10 mb-10 sm:flex-row flex-col">
            <div className="tech-entry">
                <h2 className="mb-2">Back-End</h2>
                <p className="leading-relaxed text-base">Developed a series of microservices using Django and Python. This involved designing and implementing each microservice, as well as integrating them together to form a cohesive system. I expertly connected each service through polling. This ensures that each service is always up-to-date with the latest data from the other services, which is essential for smooth communication between databases. Ensured smooth communication between databases by using a variety of techniques, such as caching, load balancing, and error handling.</p>
            </div>
            </div>
            <div className="flex items-center mx-auto pb-10 mb-10 sm:flex-row flex-col">
            <div className="tech-entry">
                <h2 className="mb-2">Front-End</h2>
                <p className="leading-relaxed text-base">Crafted a user-friendly and visually appealing experience using React, JavaScript, Bootstrap, HTML, and CSS. This involved designing and implementing a user interface that is easy to use and navigate, as well as using visual elements that are aesthetically pleasing. Facilitated effortless navigation by using a variety of techniques, such as clear and concise labelling, intuitive menus, and consistent layout. Enabled efficient CRUD operations by providing a user-friendly interface for creating, reading, updating, and deleting data.</p>
            </div>

            </div>
        </div>
    </div> */}


        {/* <section className="body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                <div className="sm:w-1/2 mb-10 px-4">
                    <div className="h-64 overflow-hidden">
                    <img alt="content goes here" className="object-cover object-center h-full w-full" src={martin2}/>
                    </div>
                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Manage services and technicians</h2>
                    <p className="leading-relaxed text-base">Add new technicians and assign services to them while tracking technician history, vehicle history, and more.</p>
                </div>
                <div className="sm:w-1/2 mb-10 px-4">
                    <div className="h-64 overflow-hidden">
                    <img alt="content goes here" className="object-cover object-center h-full w-full" src={martin3}/>
                    </div>
                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Track sales of cars and customers</h2>
                    <p className="leading-relaxed text-base">Create sales for vehicles in the database and track customer history, who they bought from, and even track the sales history for each salesperson.</p>
                </div>
                </div>
            </div>
            </section> */}


        </div>
    )
}

export default Martin
