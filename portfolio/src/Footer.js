import React from 'react'
import hub from "./hub.png"
import lab from "./lab.png"
import linked from "./linked.png"

function Footer() {
    return (
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl">Taylor Wayne</span>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <a className="ml-3 text-gray-500" href='https://www.linkedin.com/in/taywayne/' rel="noreferrer noopener" target="_blank">
        <img src={linked} alt='linked in'/>
      </a>
      <a className="ml-3 text-gray-500" href='https://github.com/tayywayne' rel="noreferrer noopener" target="_blank">
        <img src={hub} alt='github' />
      </a>
      <a className="ml-3 text-gray-500" href='https://gitlab.com/taywayne' rel="noreferrer noopener" target="_blank">
        <img src={lab} alt='gitlab' />
      </a>
    </span>
  </div>
</footer>
    )
}

export default Footer
