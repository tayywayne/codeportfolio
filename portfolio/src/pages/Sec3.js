import React from 'react'


function Sec3() {


    return (
        <>
        <section className="sec3">
  <div
    className="px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>

      <p className="mt-4">
      My portfolio comprises a diverse range of projects that demonstrate my expertise in developing end-to-end web applications from scratch. These projects serve as a testament to my proficiency in full-stack development, showcasing my ability to create robust and comprehensive solutions.
      </p>
    </div>

    <div className="projects">

      <div className="project" >
        <img src='https://i.imgur.com/JQHS4TQ.png' className='project-img' alt="content goes here"/>

        <h2 className="mt-4 text-xl font-bold">Friend Forge</h2>

        <p className="mt-1 text-sm">
        An innovative application that connects users based on their shared interests and hobbies.
        </p>
        <a href='/projects/friendforge'>More Info</a>
      </div>

      <div className="project">
      <img src='https://i.imgur.com/hkDbb3q.png' className='project-img' alt="content goes here"/>

        <h2 className="mt-4 text-xl font-bold">Portfolio</h2>

        <p className="mt-1 text-sm">
          Fully custom built portfolio website, designed to showcase my skills and experience.
        </p>
        <a href='/projects/friendforge'>More Info</a>

      </div>

      <div
        className="project"
      >
        img

        <h2 className="mt-4 text-xl font-bold">Digital campaigns</h2>

        <p className="mt-1 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
        <a href='/projects/friendforge'>More Info</a>
      </div>
    </div>

    <div className="mt-12 text-center">
      <a
        href="/projects"
        className="seemore"
      >
        See All Projects
      </a>
    </div>
  </div>



</section>
        </>
    )
}

export default Sec3
