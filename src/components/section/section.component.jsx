import React from 'react'
import './section.styles.scss'
import { About, MoreAbout } from '../about/about.component'
import { Skills } from '../skills/skills.component'
import { Project } from '../projects/projects.component'
import { Contact } from '../contact/contact.component'

export const Section = () => (
    <div className='section'>
        <About />
        <Skills />
        <Project />
        <MoreAbout />
        <Contact/>
    </div>
)