// src/components/App.js

import React, { useState } from 'react';
import UserProfile from './UserProfile';
import '../App.css'; // Importing general styles

const App = () => {
  // State to keep track of the current user ID
  const [userId, setUserId] = useState(1);

  return (
    <div className="app">
      <UserProfile userId={userId} />
      <div className="button-group">
        <button onClick={() => setUserId((prev) => prev + 1)}>Next User</button>
        <button onClick={() => setUserId((prev) => prev - 1)} disabled={userId <= 1}>
          Previous User
        </button>
      </div>
    </div>
  );
};

export default App;
