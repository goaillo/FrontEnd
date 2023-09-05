import React from 'react'

import './404.css'

export default function ErrorPage (): JSX.Element {
  // TODO make some beauty
  return (
    <div className="notFoundDiv">
      <div className="notFoundModal">
        <img src="/404.jpg" alt="image" className='imageNotFound'/>
      </div>
    </div>
  )
}
