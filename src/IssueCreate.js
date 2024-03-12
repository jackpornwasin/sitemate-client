import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function IssueCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/issues/', formData)
      .then(response => {
        console.log('Data posted successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };


  return (
    <div>
      <h1>Create Issue</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="description"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default IssueCreate;
