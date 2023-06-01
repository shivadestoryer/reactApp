import React, { useEffect, useState } from 'react';


const DataComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('13.234.232.208:8080/api/messages/getAllMessages');
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Data:</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataComponent;
