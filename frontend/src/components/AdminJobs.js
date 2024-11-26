import React, { useState, useEffect } from 'react';
import axiosClient from '../utils/AxiosClient';
import './AdminJobs.css'; // CSS file for AdminJobs

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    companyName: '',
    salary: ''
  });

  // Fetch jobs for admin
  const fetchJobs = async () => {
    try {
      const response = await axiosClient.get('http://localhost:8080/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle adding a new job
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({
      ...prevJob,
      [name]: value
    }));
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the new job via POST request
      await axiosClient.post('http://localhost:8080/api/jobs', newJob);
      setNewJob({ title: '', description: '', companyName: '', salary: '' });
      alert('Job added successfully!');
      
      // Refresh the job listing by fetching updated jobs
      fetchJobs();
    } catch (error) {
      console.error('Error adding job:', error);
      alert('Failed to add the job. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="admin-jobs-container">
      <h1>Admin - Job Listings</h1>

      {/* Job Listing Section */}
      <div className="cards-container">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p><strong>Company:</strong> {job.companyName}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Posted on:</strong> {new Date(job.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      {/* Add Job Form Section */}
      <div className="add-job-form-container">
        <h2>Add New Job</h2>
        <form onSubmit={handleJobSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={newJob.title}
            onChange={handleInputChange}
            required
          />
          <label>Description</label>
          <textarea
            name="description"
            value={newJob.description}
            onChange={handleInputChange}
            required
          />
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={newJob.companyName}
            onChange={handleInputChange}
            required
          />
          <label>Salary</label>
          <input
            type="text"
            name="salary"
            value={newJob.salary}
            onChange={handleInputChange}
            required
          />
          <br></br>
          <button type="submit">Add Job</button>
        </form>
      </div>
    </div>
  );
};

export default AdminJobs;
