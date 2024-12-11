import React, { useState } from 'react';
import './style.css';

const Selection = ({ tabData, contentData }) => {
    const [activeTab, setActiveTab] = useState(0);

    const currentContent = contentData.find((item) => item.id === activeTab);

    return (
        <div className="selection-section">
            <div className="tabs">
                {tabData.map((tab) => (
                    <button
                        key={tab.id}
                        type='button'
                        className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {currentContent && (
                <div className="content">
                    <div className="text-section">
                        <h2>{currentContent.heading}</h2>
                        <ul>
                            {currentContent.points.map((point, index) => (
                                <li key={index}>
                                    <span>✔</span> {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="image-section">
                        <img src={currentContent.imageUrl} alt={currentContent.heading} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Selection;
