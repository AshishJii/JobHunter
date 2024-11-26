import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/AxiosClient';
import './Applications.css';

const Applications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axiosClient.get('http://localhost:8080/api/applications/details');
                setApplications(response.data);
            } catch (error) {
                console.error('Error fetching applications:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="applications-container">
            <h1>Applications</h1>
            <table className="applications-table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Job Title</th>
                        <th>Candidate Name</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application, index) => (
                        <tr key={index}>
                            <td>{application.companyName}</td>
                            <td>{application.jobTitle}</td>
                            <td>{application.seekerName}</td>
                            <td>{application.skills}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Applications;
