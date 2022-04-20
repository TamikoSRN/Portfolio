import { init } from 'ityped';
import React, { useEffect, useRef } from 'react'

import "./Intro.scss"

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      showCursor: true,
      strings: ["-3-", "terrorist", "kidnapper", "racist"],
    })
  }, [])


  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/necoarc.png" alt="" />
          
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>NYAGAAA!</h2>
          <h1>Burunyuuu</h1>
          <h3>Doridoridori <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
