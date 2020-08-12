import React from 'react'
import './skills.styles.scss'
import { Data } from '../../data'
import { Box } from '../box/box.component'
import Fade from 'react-reveal/Fade';

export const Skills = () => (
    <Fade>
        <div className='skills'>
            <h1>My Skills</h1>
            <p>(Currently being a student I am exploring my interests)</p>
            <p>**To know more place the cursor over the particular card or click</p>
            <Fade right>
                <div className='skill-list'>
                    {
                        Data.map(data => (
                            <Box key={data.id} {...data} />
                        ))
                    }
                </div>
            </Fade>
            
        </div>
    </Fade>
)