// src/hooks/useFetchUserData.js

import { useState, useEffect, useCallback } from 'react';
import { fetchUserData } from '../services/userService';

export const useFetchUserData = (userId) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});

  // Memoized function to fetch and cache data
  const getUserData = useCallback(async () => {
    if (cache[userId]) {
      // Use cached data if available
      setUserData(cache[userId]);
    } else {
      // Fetch data and store in cache if not cached
      setLoading(true);
      const data = await fetchUserData(userId);
      setCache((prevCache) => ({ ...prevCache, [userId]: data }));
      setUserData(data);
      setLoading(false);
    }
  }, [userId, cache]);

  // Fetch data when userId changes
  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return { userData, loading };
};
