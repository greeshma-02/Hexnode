/**
 * UseCases Component - Displays a section with a header and a selection component for different use cases.
 * 
 * This component renders a section that includes:
 * - A header displaying the title defined in `TEXTCONSTANTS.USECASE_HEADER`.
 * - A `Selection` component that handles user interactions for selecting different tabs.
 * 
 * The `Selection` component receives two props:
 * - `tabData`: An array containing the tab options for the selection.
 * - `contentData`: An array of content that corresponds to each tab.
 * 
 * The `Selection` component dynamically updates the displayed content based on the tab selected.
 * 
 * @returns {JSX.Element} The use cases section, including a header and the selection component for content switching.
 */

import React from 'react'
import "./style.css"
import { TEXTCONSTANTS } from '../TextConstants'
import Selection from '../../common/selection'
import { contentData, tabData } from './useCaseObj'

const UseCases = () => {
    return (
        <div className='useCases-section'>
            <div className='useCases-section-header'>
                <h2>
                    {TEXTCONSTANTS.USECASE_HEADER}
                </h2>
                <div className='useCases-selector'>
                    <Selection tabData={tabData} contentData={contentData} />
                </div>
            </div>
        </div>
    )
}

export default UseCases
