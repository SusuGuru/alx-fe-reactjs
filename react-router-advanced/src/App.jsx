import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import User from './components/User';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = false; // simulate auth

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        }
      >
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      <Route path="/user/:userId" element={<User />} />
    </Routes>
  );
}

export default App;
