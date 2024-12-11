/**
 * Nav Component - Navigation bar for the application.
 * 
 * The `Nav` component renders the header section with a logo and a trial button.
 * It also handles scroll events to apply a background color change when the user scrolls down the page.
 * Additionally, it includes a hamburger menu button that will be used for mobile navigation (currently as a placeholder).
 * 
 * State Management:
 * - `hasScrolled`: Tracks whether the user has scrolled down the page. This state is used to toggle the background color of the navigation bar.
 * 
 * Lifecycle:
 * - The component listens to scroll events via `useEffect`. When the scroll position changes, it updates the `hasScrolled` state to adjust the background color.
 * 
 * @returns {JSX.Element} The navigation bar containing the logo, trial button, and hamburger button.
 */

import React, { useEffect, useState } from 'react'
import { TEXTCONSTANTS } from '../TextConstants'
import "./style.css"
import Button from '../../common/button'

const Nav = () => {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll Position:", window.scrollY);
            if (window.scrollY > 0) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)
            }
        }

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll)

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header>
            <div className={`nav-bg ${hasScrolled && 'nav-bg-scrolled'}`}>
                <div className='nav-content-box'>
                    <div className='nav-logo'>
                        hexnode
                    </div>
                    <div className='nav-buttons'>
                        <Button btnName={TEXTCONSTANTS.TRIAL} />
                        <button className='hamburger-btn'>
                            &#9776; {/* Hamburger icon */}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav
