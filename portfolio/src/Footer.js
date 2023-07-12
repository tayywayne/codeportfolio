import React from 'react'

function Footer() {
    return (
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl">Taylor Wayne</span>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <a className="ml-3 text-gray-500" href='https://www.linkedin.com/in/taywayne/' rel="noreferrer noopener" target="_blank">
        <img src='https://i.imgur.com/VNrOu6G.png' alt='linked in'/>
      </a>
      <a className="ml-3 text-gray-500" href='https://github.com/tayywayne' rel="noreferrer noopener" target="_blank">
        <img src='https://i.imgur.com/0VPtpIa.png' alt='github' />
      </a>
      <a className="ml-3 text-gray-500" href='https://gitlab.com/taywayne' rel="noreferrer noopener" target="_blank">
        <img src='https://i.imgur.com/mLP1dIW.png' alt='gitlab' />
      </a>
    </span>
  </div>
</footer>
    )
}

export default Footer
