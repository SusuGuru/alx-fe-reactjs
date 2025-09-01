import { useState } from 'react';

export default function useAuth() {
  // Simulate a logged-out user initially
  const [user, setUser] = useState(null);

  // Login function
  const login = (username) => {
    setUser({ name: username });
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Boolean flag for authentication
  const isAuthenticated = !!user;

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
}
