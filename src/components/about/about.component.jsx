import React from 'react'
import './about.styles.scss'
import Fade from 'react-reveal/Fade';
import { Hobby } from '../../data';
import { HobbyBox } from '../box/box.component';

export const About = () => (
    <Fade bottom>
        <div className='a about' id='about' >
            <h1>About Me</h1>
            <div className='row'>
                <div>
                    <p>
                        According to my insta bio I'm "Just a random guy
                        submitting theory, practical, viva, lab work, external,
                         internal, assignment, project"Since-2018.."(Engineer)
                        but under the hood I tend to learn new things and
                        try to find ways to use that knowledge to help others.
                        Recently I have also found my interest in fitness and
                        use to spend a lot of time in gym(BC: Before Covid)
                 </p>
                </div>
                <div>
                    <img src={require('../../assets/about.svg')} alt='about' />
                </div>
            </div>
        </div>
    </Fade>
)
export const MoreAbout = () => (
    <div className='a more'>
        <h1>More About me</h1>
        <div className='hobbies'>
            {
                Hobby.map(h => (
                    <HobbyBox key={h.id} {...h} />
                ))
            }
        </div>
        <div className='more-p'>
            <p>I can watch F.R.I.E.N.D.S anytime for any number of times most probably I'm watching it right now</p>
            <p style={{ position: 'relative' }}>Also I don't like coffee but I still keep drinking it all the time
        <img src={require('../../assets/coffee-breaks.svg')} alt='coffee' style={{ position: 'absolute', top: '-10px' }} />
            </p>
        </div>
    </div>
)