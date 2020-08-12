import React from 'react'
import './projects.styles.scss'
import Fade from 'react-reveal/Fade';
export const Project = () => (
    <Fade>
    <div className='project' id='project'>
        <h1>My Projects</h1>
        <Fade bottom>
        <div className='project-item'>
            <div className='col'>
                <img className='project-pic' src={require('../../assets/crwn.png')} alt='crwn'  />
            </div>
            <div className='col project-details'>
                <h3>Crwn-Clth</h3>
                <p>This is a dummy e-commerce platform created while learning React.js,Redux, Redux-saga. <br />
            It uses firebase for backend and stripe for payment integration(dummy payments)
            </p>
            <a href='https://crwn-clth-demo.herokuapp.com/' target='blank' >Visit Site</a>
            </div>
        </div>
        </Fade>
        <p style={{margin: '100px 0'}}>For more projects you can check my <a href='https://github.com/sy0837' target='blank'>Github</a></p>
    </div>
    </Fade>
)