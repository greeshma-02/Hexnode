/**
 * SignUp Component - A section for user sign-up, including email input and a demo request link.
 * 
 * This component renders a sign-up section where users can input their work email and get started
 * with the service. It also provides a link to request a demo for users who may need more information 
 * before signing up.
 * 
 * The component performs the following:
 * - Displays a header with the sign-up text.
 * - Renders an input field for the user to enter their work email, with a button to submit the email.
 * - Displays a caption with a call-to-action text about a credit card requirement, along with a link 
 *   to request a demo for further information.
 * 
 * @returns {JSX.Element} The JSX for the SignUp component, including input fields and a demo request link.
 */

import React from 'react'
import InputWithButton from '../../common/inputWithButton'
import { TEXTCONSTANTS } from '../TextConstants'
import "./style.css"

const SignUp = () => {
    return (
        <div className='signup-section'>
            <div className="signup-text">
                <h3>
                    {TEXTCONSTANTS.SIGN_UP}
                </h3>
            </div>
            <InputWithButton placeHolder={TEXTCONSTANTS.WORK_EMAIL} btnName={TEXTCONSTANTS.GET_START} />
            <p className='signup-caption'>
                {TEXTCONSTANTS.CREDIT_CARD}
                <a href="https://www.hexnode.com/mobile-device-management/request-demo/" className='link'>
                    {TEXTCONSTANTS.REQUEST_DEMO}
                </a>
            </p>
        </div>
    )
}

export default SignUp