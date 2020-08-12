import React, { useState } from 'react'
import './box.styles.scss'

const SB = ({ title, icon, type }) => (
    <div>
        {
            type === 'hobby' ?
                <div className='hobby-box' style={{ width: '150px', height: '180px' }}>
                    <img className='skill-img' src={icon} alt={title} />
                    <h3>{title}</h3>
                </div>
                :
                <div className='box' >
                    <img className='skill-img' src={icon} alt={title} />
                    <h3>{title}</h3>
                </div>

        }
    </div>
)

export const Box = ({ title, icon, certificate, expertise }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='box-container'
            onMouseEnter={() => setVisible(!visible)}
            onMouseLeave={() => setVisible(!visible)}
        >
            <SB title={title} icon={icon} />
            {
                visible ?
                    <div className='accomplish'>
                        <h4>Certificates</h4>
                        {
                            certificate.lenght === 0 ?
                                <h5>Coming Soon</h5> :
                                certificate.map(c => (
                                    <h5 key={certificate.indexOf(c)}>{c}</h5>
                                ))
                        }
                        <h4>Skills known</h4>
                        {
                            expertise.lenght === 0 ?
                                <h6>Coming Soon</h6> :
                                expertise.map(e => (
                                    <h5 key={expertise.indexOf(e)}>{e}</h5>
                                ))
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export const HobbyBox = ({ icon, title, about }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='box-container'
            onMouseEnter={() => setVisible(!visible)}
            onMouseLeave={() => setVisible(!visible)}>
            <SB type={'hobby'} title={title} icon={icon} />
            {
                visible ?
                    <div className='about-hobby'>
                    <h4>FACT</h4>
                        <h5>{about}</h5>
                    </div>
                    : null
            }
        </div>
    )
}