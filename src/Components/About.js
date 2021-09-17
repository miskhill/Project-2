import React from 'react'

const About = () => {
  return (
    <div className='text-center flex-grow-1 flex-grow-1 d-flex flex-column justify-content-center align-items-center about' >
      <div className='content'>
        <p> Hi! Thanks for visiting our Random Movie Generator! 
          <br /><br />
          Who wants to have to choose a movie when you can just randomly generate one?
          <br /><br />
                    We were given 48 hours to create a React single page application using a public API.
          <br /><br />
                      We chose the Movies Data Base as a great freely available API!   
          <br /><br />
                        Styled using SCSS/Sass and the Bootstrap framework, we added custom animations and a responsive design.
          <br /><br />
                          If you enjoyed our website, please check out our Github pages, linked below.
          <br /><br />
                            
          <a href='https://github.com/miskhill'>Gary Smith</a> and <a href='https://github.com/luckymouse11'>Victor Liew</a></p>
      </div >
    </div>
  )
}

export default About
