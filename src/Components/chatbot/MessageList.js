// src/components/MessageList.js
import React from 'react';
import Message from './Message';
import './MessageList.css';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} locations={msg.locations}/>
      ))}
    </div>
  );
}

export default MessageList;
