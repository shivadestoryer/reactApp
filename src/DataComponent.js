import React, { useState } from 'react';
import './Note.css';

const DataComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/messages/getAllMessages');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Update Messages</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <a href="#">
              <h2>NOTE</h2>
              <p>{item.content}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
