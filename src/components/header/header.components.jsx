import React from 'react'
import './header.styles.scss'
import Zoom from 'react-reveal/Zoom';

export const Header = () => (
    // <LightSpeed left>
    <div className='header'>
        <div className='logo'>
        <a href='#home'>
        <img src={require('../../assets/Copy of  eSports Ninja - APPROVED.svg')} alt='Logo' />
        </a>
           
        </div>
        <Zoom left>
        <div className='links'>
            <ul>
                <li><a href='#home'>HOME</a></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#project'>PROJECTS</a></li>
                <li><a href='https://github.com/sy0837'>RESUME</a></li>
            </ul>
        </div>
        </Zoom>
        
    </div>
    // </LightSpeed>
)