import React from 'react'

function Contact() {
  return (
    <div className='contact'>


<section className="bg-gray-100 min-h-screen">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
          At the same time, the fact that we are wholly owned and totally
          independent from manufacturer and other group control gives you
          confidence that we will only recommend what is right for you.
        </p>

        <div className="mt-8">
          put contact links here
        </div>
      </div>

      <div className=" bg-white p-8 lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="input-label" htmlFor="name">Name</label>
            <input
              className="input w-full"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="input-label" htmlFor="email">Email</label>
              <input
                className="input w-full"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="input-label" htmlFor="phone">Company</label>
              <input
                className="input w-full"
                type="text"
                id="company"
              />
            </div>
          </div>



          <div>
            <label className="input-label" htmlFor="message">Message</label>

            <textarea
              className="input w-full"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="comic-button"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
