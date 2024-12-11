/**
 * ChatIcon Component - Displays a clickable chat icon.
 * 
 * This component renders a chat icon as an image. It can be used to trigger chat functionality,
 * such as opening a chat window or directing users to a chat interface.
 * 
 * The image source should be provided as the `src` property of the `<img>` tag.
 * 
 * @returns {JSX.Element} A clickable chat icon image.
 */

import React from 'react';
import './style.css';

const ChatIcon = () => {
    return (
        <div className="chat-icon">
            {/* Chat icon image */}
            <img src="/images/chat.png" alt="Chat Icon" />
        </div>
    );
};

export default ChatIcon;
