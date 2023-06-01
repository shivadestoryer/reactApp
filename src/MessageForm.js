import React, { useState } from 'react';

const MessageForm = () => {
  const [content, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the message to the backend
    const response = await fetch('13.234.232.208:8080/api/messages/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (response.ok) {
      // Message successfully stored in the database
      console.log('Message posted successfully!');
      setMessage('');
    } else {
      console.error('Error posting message');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MessageForm;