import React from 'react'
import './style.css'

const Button = ({ btnName }) => {
    return (
        <>
            <button type="button" className='actn-button'>
                {btnName}
            </button>
        </>
    )
}

export default Button