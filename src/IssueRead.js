import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function IssuesPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/issues/')
      .then(response => setRecords(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  const deleteRecord = (id) => {
    axios.delete(`http://localhost:8000/issues/${id}/`) // Adjust the endpoint as needed
      .then(() => {
        setRecords(records.filter(record => record.id !== id));
      })
      .catch(error => console.error('Error deleting record:', error));
  };  

  return (
    <div>
      <h1>Issue List</h1>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            {record.title} - {record.description} 
            &nbsp; <Link to={`/${record.id}`}>Update</Link>
            &nbsp; <Link onClick={() => deleteRecord(record.id)}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>    
  );
}

export default IssuesPage;
