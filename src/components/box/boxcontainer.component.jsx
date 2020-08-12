import React, { useState } from 'react'
import './box.styles.scss'

export const BoxContainer= () =>{
    const [visible, setVisible] = useState(false)
    return(
        <div className='box-container'
        onMouseEnter={() => setVisible(!visible)}
        onMouseLeave={() => setVisible(!visible)}>

    </div>
    )
}