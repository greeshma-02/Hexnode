/**
 * Possibilities Component - Displays a section with an accordion-style UI for exploring different possibilities.
 * 
 * This component renders a section that includes:
 * - A header displaying the title defined in `TEXTCONSTANTS.POSSIBILITY_HEADER`.
 * - An image section that changes based on the selected accordion item.
 * - An `Accordion` component that displays a list of possibilities and allows users to expand or collapse sections.
 * 
 * The component uses the `Accordion` component with the following props:
 * - `data`: An array of objects containing data for each possibility.
 * - `linkText`: Text to display on the accordion links, retrieved from `TEXTCONSTANTS.FREE_TEXT`.
 * - `onIndexChange`: A function to handle the index change, updating which possibility is shown in the image section.
 * 
 * The component manages the currently active index using React's `useState` hook. When an accordion item is clicked, it updates the active index and shows the corresponding image for that possibility.
 * 
 * @returns {JSX.Element} The possibilities section, including a header, dynamic images, and an accordion for content navigation.
 */

import React, { useState } from 'react'
import { TEXTCONSTANTS } from '../TextConstants'
import "./style.css"
import Accordion from '../../common/accordian'
import { dataObj } from './dataObject'

const Possibilities = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Updates the active index for the accordion
    const handleIndexChange = (newActiveIndex) => {
        setActiveIndex(newActiveIndex === null ? 0 : newActiveIndex);
    }

    return (
        <div className='possibilities-section'>
            <div className='possibilities-header'>
                <h2>
                    {TEXTCONSTANTS.POSSIBILITY_HEADER}
                </h2>
            </div>
            <div className='possibilities-content'>
                {dataObj.map((item, index) => (
                    index === activeIndex && (
                        <div key={index} className='possibilities-image'>
                            <img src={item.url} alt={`Possibility ${index}`} />
                        </div>
                    )
                ))}
                <div className='possibilities-text'>
                    <Accordion data={dataObj} linkText={TEXTCONSTANTS.FREE_TEXT} onIndexChange={handleIndexChange} />
                </div>
            </div>
        </div>
    )
}

export default Possibilities
