/**
 * Footer Component - Renders the footer section of the webpage.
 * 
 * This component displays three main links (Terms of Use, Privacy, and Cookies), along with a copyright notice.
 * The links are dynamically generated from an array of objects containing `name` and `url` properties.
 * 
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */

import React from 'react';
import "./style.css";

const Footer = () => {
    // Define the footer link items and their respective URLs
    const linkItems = [
        { name: "Terms of Use", url: "https://www.hexnode.com/legal/terms-of-use/" },
        { name: "Privacy", url: "https://www.hexnode.com/legal/privacy-policy/" },
        { name: "Cookies", url: "https://www.hexnode.com/legal/cookies-policy/" }
    ];

    return (
        <footer>
            <div className='footer-bg'>
                {/* Footer links section */}
                <div className='footer-links'>
                    {
                        // Map through the linkItems array to render each link dynamically
                        linkItems.map((item) => (
                            <div className='footer-links-item' key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </div>
                        ))
                    }
                </div>

                {/* Copyright section */}
                <div className='footer-copyright'>
                    <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
