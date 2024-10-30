// src/components/UserProfile.js

import React, { useMemo } from 'react';
import { useFetchUserData } from '../hooks/useFetchUserData';
import '../styles/UserProfile.css';

const UserProfile = ({ userId }) => {
  // Custom hook to fetch user data and manage loading state
  const { userData, loading } = useFetchUserData(userId);

  // Memoized user details for optimized rendering
  const userDetails = useMemo(() => {
    if (!userData) return 'Loading...';
    return `Name: ${userData.name}, Age: ${userData.age}`;
  }, [userData]);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <p>{userDetails}</p>
      )}
    </div>
  );
};

export default UserProfile;
