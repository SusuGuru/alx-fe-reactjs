import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Info</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetails;
