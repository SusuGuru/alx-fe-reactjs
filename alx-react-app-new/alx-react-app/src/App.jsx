import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // 👈 Counter added

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Soraya" age={25} bio="I love exploring new cities." />
      <Counter /> {/* 👈 Shows counter with buttons */}
      <Footer />
    </div>
  );
}

export default App;
