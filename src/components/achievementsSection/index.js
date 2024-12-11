/**
 * AchievementsSection Component - Displays a section of achievements with images and information.
 * 
 * This component renders a section where a list of achievements is shown. Each achievement consists of:
 * - An image (retrieved from the `url` property of each achievement object).
 * - A text description (from the `infoText` property).
 * 
 * The data for the achievements comes from the `acheivment_field` array, which contains objects with `key`, `url`, and `infoText` properties.
 * 
 * @returns {JSX.Element} The achievement section with individual achievement cards containing an image and description.
 */

import React from 'react'
import './style.css'
import { acheivment_field } from './achievementObj'

const AchievementsSection = () => {
    return (
        <div className='achvmnt-section'>
            <div className='achvmnt-card'>
                {
                    acheivment_field.map((cardItem) => {
                        const { key, url, infoText } = cardItem
                        return (
                            <div className='achvmnt-card-item' key={key}>
                                <div className='achvmnt-header-img'>
                                    <img src={url} alt={key} />
                                </div>
                                <div className='achvmnt-card-text'>
                                    <p>{infoText}</p>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default AchievementsSection
