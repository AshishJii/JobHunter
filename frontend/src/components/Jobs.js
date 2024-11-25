import axios from 'axios';
import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/AxiosClient';
import './Jobs.css';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axiosClient.get('http://localhost:8080/api/jobs');
                console.log(response.data)
                setJobs(response.data);
            } catch (error) {
                console.log(error)
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="jobs-container">
            <h1>Job Listings</h1>
            <div className="cards-container">
                {jobs.map((job) => (
                    <div className="job-card" key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        <p><strong>Company:</strong> {job.companyName}</p>
                        <p><strong>Salary:</strong> ${job.salary}</p>
                        <p><strong>Posted on:</strong> {new Date(job.createdAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;