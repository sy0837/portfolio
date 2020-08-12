import React from 'react'
import './topsection.styles.scss'
import { Header } from '../header/header.components'
import { Intro } from '../intro/intro.component'
import { Landing } from '../landing-page/landinghero.components'

export const Top = () => (
    <div className='top' id='home'>
        <Header />
        <Intro />
        <Landing />
    </div>
)