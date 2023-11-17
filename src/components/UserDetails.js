// src/components/UserDetails.js

import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  // Fetch User Data
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch user data from your placeholder database
    // Replace the URL with the actual endpoint to fetch user data
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  // Implement User Data Table
  const filteredUsers = userData.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Implement Popup/Modal for Generating Reports
  const handleReportButtonClick = (userId) => {
    // For now, just display an alert
    window.alert(`Generating report for user ${userId}`);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4"
      />
      <table className="min-w-full border">
        <thead>
          <tr>
          <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Creation Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.creationDate}</td>
              <td className="border p-2">
              <button
                  onClick={() => handleReportButtonClick(user.id)}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Generate Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
