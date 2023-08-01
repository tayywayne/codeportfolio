import React from 'react'


function Sec3() {


    return (
      <>
        <div className="sec3">
          <div className="py-8 px-3">
            <div className="">
              <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>

              <p className="mt-4">
              My portfolio comprises a diverse range of projects that demonstrate my expertise in developing end-to-end web applications from scratch. These projects serve as a testament to my proficiency in full-stack development, showcasing my ability to create robust and comprehensive solutions.
              </p>
            </div>

            <div className="projects">

              <div class="card">
              <img src='https://i.imgur.com/JQHS4TQ.png' className='project-img' alt="content goes here"/>
                <div class="card-title">Friend Forge</div>
                <div class="card-subtitle">An innovative application that connects users based on their shared interests and hobbies.</div>

                <div class="card-footer">
                <a className="inline-flex items-center mt-4" href='/projects/friendforge'>Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                </div>
              </div>

              <div class="card">
              <img src='https://i.imgur.com/hkDbb3q.png' className='project-img' alt="content goes here"/>
                <div class="card-title">Portfolio</div>
                <div class="card-subtitle">Fully custom built portfolio website, designed to showcase my skills and experience.</div>

                <div class="card-footer">
                <a className="inline-flex items-center mt-4" href='/projects/portfolio'>Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                </div>
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



        </div>
      </>
    )
}

export default Sec3
