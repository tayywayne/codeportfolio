import React from 'react'

function FriendForge() {
    return (
        <div className='project-page'>
            <section>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
        <h2 className="text-4xl font-bold sm:text-5xl">
            Friend Forge
        </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
            alt="Party"
            src="https://i.imgur.com/JQHS4TQ.png"
            className="absolute inset-0 h-full w-full object-cover"
            />
        </div>

        <div className="lg:py-16">

            <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className=" text-center"><a href='https://blacksmith-collaborative.gitlab.io/friendforge/' rel="noreferrer noopener" target="_blank">Live Site</a></div>

                <div className="text-center"><a href='https://gitlab.com/blacksmith-collaborative/friendforge' rel="noreferrer noopener" target="_blank">Repo</a></div>
            </div>
            <article className="space-y-4">
            <p>
            Friend Forge is an innovative social networking platform that fills the gap between meetup and bumble by providing a unique matchmaking experience. Unlike traditional platforms, Friend Forge dynamically connects users with five other individuals who share similar interests, creating meaningful connections. <br/><br/>

            Developed by a skilled team of four, the application leverages cutting-edge technologies such as FastAPI for robust back-end functionality and Tailwind for sleek front-end design. By focusing on fostering genuine friendships, Friend Forge offers users the opportunity to sign up, create profiles, and enter the captivating "Forge," where they are matched with open groups that align with their shared interests.
            </p>
            </article>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

                <div className="h-32 text-center">
                    <h3>Role</h3>
                    <p>Full-Stack Devloper</p>
                </div>

                <div className="h-32 text-center">
                    <h3>Technologies</h3>
                    <p>FastAPI / React / SQL / Tailwind / DaisyUI / PostgresQL</p>
                </div>

                <div className="h-32 text-center">
                    <h3>Timeline</h3>
                    <p>April '23 - June '23</p>
                </div>

            </div>

        </div>
        </div>
    </div>
    </section>





    <section className="text-gray-600 body-font tech-stack">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src='https://i.imgur.com/MBOcKLL.png' alt="content goes here"/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-lg title-font font-medium mb-2">Back-End</h2>
                <p className="leading-relaxed text-base">The back end of Friend Forge was crafted using a powerful blend of Python, SQL, PostgresQL, and FastAPI. This robust combination allowed for seamless integration of essential functionalities, such as user accounts, authentication, and more. Additionally, the back end boasts efficient API endpoints that enable users to effortlessly join groups and be matched with open groups that align with their interests. To ensure optimal performance and scalability, the back end was successfully deployed on Google Services, providing a reliable and secure foundation for the platform.</p>
            </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-lg title-font font-medium mb-2">Front-End</h2>
                <p className="leading-relaxed text-base">The front end of Friend Forge was constructed using a combination of JavaScript, HTML, CSS, Tailwind, DaisyUI, and React. This robust technology stack allowed for the creation of a visually appealing and highly responsive user interface. With the integration of authentication capabilities that work seamlessly with cookies, users can enjoy a secure and personalized experience on the website. The intuitive design and user-friendly interface enable effortless navigation, ensuring that users can easily explore and engage with the various features and functionalities of the platform.</p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center flex-shrink-0">
                <img src='https://i.imgur.com/jJIGIsp.png' alt="content goes here"/>
            </div>
            </div>
        </div>
        </section>


        <section className="body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                <div className="sm:w-1/2 mb-10 px-4">
                    <div className="h-64 overflow-hidden">
                    <img alt="content goes here" className="object-cover object-center h-full w-full" src="https://i.imgur.com/yAqtuaj.gif"/>
                    </div>
                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Join Other Users in Groups</h2>
                    <p className="leading-relaxed text-base">Once a user signs up and fill out their profile, they can join a group that has an open spot with other like minded people!</p>
                </div>
                <div className="sm:w-1/2 mb-10 px-4">
                    <div className="h-64 overflow-hidden">
                    <img alt="content goes here" className="object-cover object-center h-full w-full" src="https://i.imgur.com/dD3lStM.gif"/>
                    </div>
                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Chat with your new friends</h2>
                    <p className="leading-relaxed text-base">Users can chat with their new friends in realtime chat, add them as a friend and see their profile!</p>
                </div>
                </div>
            </div>
            </section>


        </div>
    )
}

export default FriendForge
