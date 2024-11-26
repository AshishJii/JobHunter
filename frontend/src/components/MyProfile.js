import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/AxiosClient';
import './Profile.css'; // Add styles similar to Jobs.css
import { useAuth } from '../contexts/AuthContext';

const MyProfile = () => {
    const { user } = useAuth();
    const userId = user.id;
    const [profile, setProfile] = useState(null);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfileAndApplications = async () => {
            try {
                // Fetch profile data
                const profileResponse = await axiosClient.get('http://localhost:8080/users/me');
                setProfile(profileResponse.data);

                // Fetch applications for the user
                const applicationsResponse = await axiosClient.get('http://localhost:8080/api/applications/user/'+userId); // Replace 52 with dynamic userId if needed
                setApplications(applicationsResponse.data);
            } catch (error) {
                console.error('Error fetching profile and applications:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileAndApplications();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="profile-container">
            <h1>My Profile</h1>
            <div className="profile-card">
                <h2>{profile.name}</h2>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Mobile:</strong> {profile.mobile}</p>
                <p><strong>Skills:</strong> {profile.skills}</p>
                <p><strong>Account Status:</strong> {profile.enabled ? 'Active' : 'Inactive'}</p>
                <p><strong>Member Since:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
            </div>

            <h2>My Applications</h2>
            {applications.length > 0 ? (
                <table className="applications-table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Applied On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application) => (
                            <tr key={application.id}>
                                <td>{application.job.title}</td>
                                <td>{application.job.companyName}</td>
                                <td>{application.status}</td>
                                <td>{new Date(application.appliedAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No applications found.</p>
            )}
        </div>
    );
};

export default MyProfile;
