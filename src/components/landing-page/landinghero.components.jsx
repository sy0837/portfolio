import React from 'react'
import './landinghero.styles.scss'
import Zoom from 'react-reveal/Zoom';

export const Landing = () => (
    <div>
        <img className='dev' src={require('../../assets/Dev.svg')} alt='Develop' />
        <Zoom>
            <img className='dp' src={require('../../assets/portbg.png')} alt='none' />
        </Zoom>
        <img className='web' src={require('../../assets/We.svg')} alt='WEb' />
    </div>
)
