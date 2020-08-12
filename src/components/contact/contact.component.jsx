import React from 'react'
import './contact.styles.scss'
import { Social } from '../social/social.component'

export const Contact = () => (
    <div className='contact'>
        <h1>To Get In Touch</h1>
        <p>You can always reach me on my via mail <br />
or via any of the other social media links provided</p>
<p><a style={{color: 'black'}} href='mailto:sy12042000@gmail.com'>E-Mail</a></p>
        <Social />
        <p>Made By Sumit</p>
    </div>
)