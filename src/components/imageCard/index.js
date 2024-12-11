/**
 * ImageCard Component - Displays a card with an image, a comment, and user details.
 * 
 * This component renders an image card that displays:
 * - An image (`url` prop) associated with a user.
 * - A comment/quote (`comment` prop) attributed to that user.
 * - The user's name (`userName` prop), designation (`designation` prop), and company (`company` prop).
 * 
 * The image will only be rendered if the `url` prop is provided.
 * 
 * @component
 * @example
 * return (
 *   <ImageCard 
 *     url="https://example.com/image.jpg"
 *     comment="This is a comment."
 *     userName="John Doe"
 *     designation="Software Engineer"
 *     company="Example Corp"
 *   />
 * )
 */

import React from 'react';
import "./style.css";

const ImageCard = ({ url, comment, userName, designation, company }) => {
    return (
        url &&
        <div className='imageCard-section'>
            <div className='imageCard-img'>
                <img src={url} alt={userName} />
            </div>
            <div className='imageCard-text'>
                <div className='imageCard-quote'>
                    <h4>"{comment}"</h4>
                </div>
                <div className='imageCard-user'>
                    <div className='imageCard-name'>
                        <h3>{userName}</h3>
                    </div>
                    <div className='imageCard-designation'>
                        {designation}
                    </div>
                    <div className='imageCard-company'>
                        {company}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
