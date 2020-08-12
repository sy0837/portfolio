import React, { useState } from 'react'
import './social.styles.scss'
import { SocialData } from '../../data'

const SocialItem = ({ title, icon, link }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='social-item'
            onMouseEnter={() => setVisible(!visible)}
            onMouseLeave={() => setVisible(!visible)}>
            <a href={link}><img className='social-icon' src={icon} alt={title} width='40' height='40' /></a>
            {
                visible ? <span className='social-about'>{title}</span> : null
            }
        </div>
    )
}

export const Social = () => (
    <div className='social-block'>
        {
            SocialData.map(s => (
                <SocialItem key={s.id} {...s} />
            ))
        }

    </div>
)