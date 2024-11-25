import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/AxiosClient';
import './Profile.css'; // Add styles similar to Jobs.css

const MyProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axiosClient.get('http://localhost:8080/users/me');
                console.log(response.data);
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
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
                <p><strong>Account Status:</strong> {profile.enabled ? 'Active' : 'Inactive'}</p>
                <p><strong>Member Since:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default MyProfile;
