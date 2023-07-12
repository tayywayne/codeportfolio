import React from 'react'

function About() {
    return (
        <div className='about-page'>

    <section className="overflow-hidden bg-stone-100 sm:grid sm:grid-cols-2 about">
    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div
        className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right"
        >
        <h2 className="text-2xl font-bold md:text-3xl">
        I'm Taylor. I'm a software engineer, creative thinker, and a problem solver.
        </h2>

        <p className="hidden md:mt-4 md:block">
        I'm Taylor, a passionate software engineer with a love for crafting captivating web experiences. From my early days exploring Geocities, I was hooked on the art of creating online. Technology and programming have fascinated me since childhood, and I spent hours building layouts and fun websites for sheer enjoyment. <br /><br />

        During a transformative journey of self-improvement in 2021, my passion for programming and web development reignited. I realized that this field offered an excitement and fulfillment that my previous career path lacked. In 2022, I made the bold decision to fully immerse myself in this new path.<br /><br />

        Programming fuels me with a deep sense of pride. I relish the opportunity to unleash my creativity, solve complex problems, and continuously expand my knowledge. Each day presents a fresh chance to learn and grow, and I am exhilarated by the boundless possibilities that programming holds.<br /><br />
        </p>

        </div>
    </div>

    <img
        alt="inside of capital building"
        src="https://i.imgur.com/kBjWmo6.jpg"
        className="h-56 w-full object-cover sm:h-full"
    />
    </section>




        <section className="text-gray-600 body-font about2">
    <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
        <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <img src='https://i.imgur.com/Gumir24.jpg' className='project-img' alt='insdide of building'/>
            <div className="flex flex-col items-center text-center justify-center">
                <div className="w-12 h-1 blue-div mt-2 mb-4"></div>
            </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-stone-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">In my personal life, I thrive on unleashing my creativity through various outlets such as photography, painting, and any form of artistic expression. Additionally, I find immense joy in engaging in outdoor activities like cycling, kayaking, and exploring the wonders of nature. <br /><br />

            These passions enrich my life and provide a balance to my work as a software engineer, allowing me to recharge and find inspiration from the world around me.</p>
            </div>
        </div>
        </div>
    </div>
    </section>




    <section className="body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">I would like to be remembered as someone who was not afraid to do what she wanted to do, and as someone who took risks along the way in order to achieve her goals.</p>
      <span className="inline-block h-1 w-10 blue-div mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">SALLY RIDE</h2>
      <p className="text-gray-500">Physicist, NASA Communicator and Astronaut</p>
    </div>
  </div>
</section>





        </div>
    )
}

export default About
