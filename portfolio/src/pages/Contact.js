import React from 'react'

function Contact() {
  return (
    <div className='contact'>


      <div className="bg-gray-100 min-h-screen bg-black">
        <div className="mx-auto px-4 ">
          <div className="">
            <div className="lg:col-span-2 lg:py-12">
              <h1>Contact Me</h1>
              <p className="text-white">
                Looking to talk, collab or interested in what I can do for your company? Please reach out via my email, linkedin or fill out the contact form below.
              </p>

              <div className="mt-8 contact-links">
                <a href="mailto:taywayne@outlook.com">taywayne@outlook.com</a><br/>
                <a href="https://www.linkedin.com/in/taywayne/">Linked In</a>
              </div>
            </div>

            <div className=" bg-white p-8 lg:col-span-3 lg:p-12">

              <form action="" className="space-y-4" data-netlify="true">
              <input type="hidden" name="form-name" value="contact"/>
                <div>
                  <label className="input-label" htmlFor="name">Name</label>
                  <input className="input w-full" type="text" id="name" name='name'/>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="input-label" htmlFor="email">Email</label>
                    <input className="input w-full" type="email" id="email" name='email'/>
                  </div>

                  <div>
                    <label className="input-label" htmlFor="phone">Company</label>
                    <input className="input w-full" type="text" id="company" name='company'/>
                  </div>
                </div>



                <div>
                  <label className="input-label" htmlFor="message">Message</label>
                  <textarea className="input w-full" rows="8" id="message" name='message'></textarea>
                </div>

                <div className="mt-4">
                  <button type="submit" className="comic-button" >
                    Send Email
                  </button>
                </div>
              </form>

            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
