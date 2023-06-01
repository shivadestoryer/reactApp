import React, { useState } from 'react';

const PostMessageForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message to the server
    // You can make an HTTP POST request to your Spring Boot API here
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Enter your message"
      />
      <button type="submit">Post Message</button>
    </form>
  );
};

export default PostMessageForm;