import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px' }}>
        <h1>React Query Data Management</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;