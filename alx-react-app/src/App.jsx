import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile'; // ✅ Added

function App() {
  return (
    <div>
      <Header />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
