import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
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
