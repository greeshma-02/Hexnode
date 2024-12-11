/**
 * Platforms Component - Displays supported platforms as a list of images.
 * 
 * This component renders a list of platform images sourced from the `imageSource` array.
 * Each image is displayed within its own container, and the images are rendered dynamically 
 * using the `map` function to loop over the data from the `imageSource` array.
 * 
 * The component performs the following:
 * - Displays a header titled "Platforms supported".
 * - Maps over the `imageSource` array, rendering an image for each entry.
 * - Each image is rendered within a `div` element, which is assigned a unique `key` for efficient rendering.
 * - The `alt` text for each image is set to the `key` of the corresponding image item for better accessibility.
 * 
 * @returns {JSX.Element} The JSX for the Platforms component, including the header and platform images.
 */

import React from 'react'
import { imageSource } from './imageSourceObj'
import './style.css'

const Platforms = () => {
    return (
        <div>
            <h1>Platforms supported</h1>
            <div className='platform-image-section'>
                {
                    imageSource.map((imageItem) => (
                        <div key={imageItem.key} className='platform-image-item'>
                            <img src={imageItem.url} alt={imageItem.key} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Platforms
