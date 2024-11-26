import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/AxiosClient';
import { useAuth } from '../contexts/AuthContext';
import './Jobs.css';

const Jobs = () => {
    const { user, logout } = useAuth();
    console.log('🔥');
    console.log(user);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axiosClient.get('http://localhost:8080/api/jobs');
                console.log(response.data);
                setJobs(response.data);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleApply = async (job) => {
        try {
            const seekerId = 52; // Replace with the current logged-in user's ID
            const sendData = {
                job: job,
                seeker: user,
            }
            console.log('🔥🔥🔥')
            console.log(sendData)
            const response = await axiosClient.post('http://localhost:8080/api/applications', sendData);
            console.log('🔥🔥🔥')
            console.log(sendData)
            alert(`Application successful for Job ID: ${job.id}`);
            console.log(response.data);
        } catch (error) {
            console.error('Error applying for job:', error);
            alert('Failed to apply for the job. Please try again.');
        }
    };

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
                        <button 
                            className="apply-button" 
                            onClick={() => handleApply(job)}
                        >
                            Apply
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
