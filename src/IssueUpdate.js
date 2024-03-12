import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

function IssueUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    // Fetch the existing record data
    axios.get(`http://localhost:8000/issues/${id}/`)
      .then(response => {
        setFormData(response.data); // Pre-populate the form with the fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/issues/${id}/`, formData)
      .then(response => {
        console.log('Data put successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };


  return (
    <div>
      <h1>Update Issue</h1>
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

export default IssueUpdate;
