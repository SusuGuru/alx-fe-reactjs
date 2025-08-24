import './styles/App.css';
import Search from './components/Search';
import LogoLinks from './components/LogoLinks.jsx'; // optional

function App() {
  return (
    <div className="App">
      <LogoLinks /> {/* optional */}
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
