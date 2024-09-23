// src/components/Message.js
import React from 'react';
import './Message.css';

function Message({ sender, text }) {
  return (
    <div className="message">
      <div className="message-content">
        <strong>{sender}: </strong>
        {text}
      </div>
    </div>
  );
}

export default Message;
