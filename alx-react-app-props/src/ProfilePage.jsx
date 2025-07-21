import { useContext } from 'react';
import UserDetails from './UserDetails';
import UserContext from './UserContext';

function ProfilePage() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Welcome to the Profile Page, {user.name}!</h1>
      <UserDetails />
    </div>
  );
}

export default ProfilePage;
