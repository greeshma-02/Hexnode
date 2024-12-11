/**
 * Reviews Component - Displays customer reviews and associated company logos in a carousel.
 * 
 * This component renders two main sections:
 * 1. **Customer Reviews Carousel**: Displays a list of customer reviews with user images, comments, names, designations, and company details. These reviews are rendered dynamically from the `reviewsList` constant.
 * 2. **Company Logos Carousel**: Displays a carousel of company logos that are shown below the reviews section. The logos are provided as an array of image URLs.
 * 
 * The component uses the following:
 * - **State Management (`useState`)**: Stores the list of reviews as `reviewItems` which is updated in the `useEffect` hook.
 * - **Side-effect Hook (`useEffect`)**: Maps the `reviewsList` to an array of `ImageCard` components, which is then set to the `reviewItems` state.
 * - **Carousel Component**: A reusable `Carousel` component is used for both the customer reviews and company logos sections, with different props to handle the display of items and navigation arrows.
 * 
 * The component handles a loading state by displaying a loading message when reviews are not yet available.
 * 
 * @returns {JSX.Element} The reviews section, including customer reviews in a carousel and a logo carousel.
 */

import React, { useEffect, useState } from 'react'; // import useState and useEffect for managing state
import './style.css';
import ImageCard from '../imageCard';
import { reviewsList } from './reviewsConstants';
import Carousel from '../../common/carousal';

const Reviews = () => {
    // List of logos for the company logos carousel
    const logos = ["/images/group1-automotive.webp", "/images/group1-automotive.webp", "/images/group1-automotive.webp"];

    // State to store review items
    const [reviewItems, setReviewItems] = useState([]);

    // Mapping reviewsList to create the review items dynamically
    useEffect(() => {
        const mappedReviews = reviewsList.map((user) => {
            const { key, url, comment, userName, designation, company } = user;
            return (
                <div key={key}>
                    <ImageCard
                        url={url}
                        comment={comment}
                        userName={userName}
                        designation={designation}
                        company={company}
                    />
                </div>
            );
        });
        setReviewItems(mappedReviews);
    }, []);

    return (
        <div className='reviews-bg'>
            <div className='reviews-content'>
                <h2>Why should you choose Hexnode?</h2>
                {reviewItems.length > 0 ? (
                    <div className="reviews-carousel">
                        <Carousel contentItems={reviewItems} isArrows />
                    </div>
                ) : (
                    <p>Loading reviews...</p>
                )}

                <div className="logos-carousel">
                    <Carousel contentItems={logos} isImageCarousel />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
