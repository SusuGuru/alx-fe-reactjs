import UserProfile from './UserProfile'; 
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />  {/* ✅ Correct usage */}
    </UserContext.Provider>
  );
}

export default App;
