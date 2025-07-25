import { useContext } from 'react';
import UserContext from './UserContext';
import UserDetails from './UserDetails';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Welcome to the Profile Page, {user.name}!</h1>
      <UserDetails />
    </div>
  );
}

export default UserProfile;
