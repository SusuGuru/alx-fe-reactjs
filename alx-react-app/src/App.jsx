import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserProfile
        name="Soraya"
        age="23"
        bio="Aspiring full-stack developer, passionate about React!"
      />
      <Footer />
    </div>
  );
}

export default App;
