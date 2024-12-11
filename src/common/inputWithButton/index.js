import React from 'react'
import Button from '../button'
import "./style.css"

const InputWithButton = ({ placeHolder, btnName }) => {
    return (
        <div className='input-btn'>
            <div className="inputfield">
                <input type="text" placeholder={placeHolder} />
            </div>
            <div className="action-button">
                <Button btnName={btnName} />
            </div>
        </div>
    )
}

export default InputWithButton