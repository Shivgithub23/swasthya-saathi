// src/components/Message.js
import React from 'react';
import './Message.css';
import MapComponent from './MapComponent';

function Message({ sender, text, locations }) {
  if(sender === "map")
  {
    return (
    <div className="message">
      <MapComponent locations = {locations}/>
    </div>
    );
  }
  else 
  {
  return (
    <div className="message">
      <div className="message-content">
        <strong>{sender}: </strong>
        {text}
      </div>
    </div>
  );
  }
}

export default Message;
