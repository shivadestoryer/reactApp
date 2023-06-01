import React, { useState } from 'react';

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };
  // Other component code

  return (
    <div>
      {/* Display messages */}
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}

      {/* Message input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleChange}
          placeholder="Enter your message"
        />
        <button type="submit">Post Message</button>
      </form>
    </div>
  );
};

export default MessageBoard;