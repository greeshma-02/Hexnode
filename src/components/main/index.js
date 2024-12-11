/**
 * MainSection Component - The main section of the landing page.
 * 
 * This component is responsible for rendering the main hero section of the page, which includes:
 * - A banner image (kiosk device image).
 * - A heading text (caption) to describe the purpose of the page.
 * - An input field with a button for users to enter their work email and get started.
 * 
 * The content displayed (caption text, work email placeholder, and button text) is sourced from the `TEXTCONSTANTS` object.
 * 
 * @returns {JSX.Element} The main section of the landing page with an image, caption, and an email input field.
 */

import InputWithButton from "../../common/inputWithButton"
import { TEXTCONSTANTS } from "../TextConstants"
import "./style.css"

import React from 'react'

const MainSection = () => {
    return (
        <>
            <div className='main-section'>
                <div className='main-content'>
                    <div className="main-image">
                        <img src="/images/hexnode-kiosk-img.webp" alt="kiosk device" />
                    </div>
                    <div className="text-content-input">
                        <h1>
                            {TEXTCONSTANTS.CAPTION}
                        </h1>
                        <div className="email-input">
                            <InputWithButton placeHolder={TEXTCONSTANTS.WORK_EMAIL} btnName={TEXTCONSTANTS.GET_START_NOW} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MainSection
