import React, { useEffect, useState } from 'react';
import axiosClient from '../utils/AxiosClient';  // Make sure to import your Axios client
import './Users.css';  // For styling the table

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch users from the backend when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosClient.get('http://localhost:8080/users');  // Replace with correct URL
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="admin-users-container">
            <h1>All Users</h1>
            <table className="admin-users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Skills</th>
                        <th>Registered On</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.skills}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button
                                    onClick={() => window.open(`http://localhost:8080/uploads/${user.id}.pdf`, "_blank")}
                                    className="resume-button"
                                >
                                View Resume
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
