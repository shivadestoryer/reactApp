import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.text}</p>
          <ul>
            {message.comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MessageList;