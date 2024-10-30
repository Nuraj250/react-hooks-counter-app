// src/services/userService.js

// Simulates fetching user data from an API
export const fetchUserData = (userId) => {
  console.log(`Fetching data for user: ${userId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: `User ${userId}`, age: 20 + userId });
    }, 1000);
  });
};
