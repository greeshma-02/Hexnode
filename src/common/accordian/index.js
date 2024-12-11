import React, { useState } from 'react';
import './style.css';

const Accordion = ({ data, linkText = false, onIndexChange }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        const newActiveIndex = index === activeIndex ? null : index
        setActiveIndex(newActiveIndex);
        onIndexChange(newActiveIndex)
    };

    return (
        <div className="accordion">
            {data.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className={`accordion-header ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleToggle(index)}
                    >
                        <h3>
                            {item.header}
                        </h3>
                    </div>
                    {index === activeIndex && (
                        <div className="accordion-content">
                            {item.content}
                            <div>
                                {linkText && (
                                    <a className='link' href='https://www.hexnode.com/mobile-device-management/cloud/signup/'>
                                        {linkText}
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
