import React from 'react'
// import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Js and Node Js",
          "Full stack web developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50, 
      }}
    />
  )
}

export default Text