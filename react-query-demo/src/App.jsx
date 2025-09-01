import './App.css';
import PostsComponent from './components/PostsComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
