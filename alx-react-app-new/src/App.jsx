import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ Make sure this is here

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Soraya" age={25} bio="Frontend Developer learning React." />
      <Counter /> {/* ✅ Add this to render the counter */}
      <Footer />
    </div>
  );
}

export default App;
