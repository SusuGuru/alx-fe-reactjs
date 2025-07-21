import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Soraya" age={22} bio="Aspiring full-stack developer and travel enthusiast." />
      <Footer />
    </>
  );
}

export default App;
