import { QueryClient, QueryClientProvider } from 'react-query'

import Films from './components/Films';
import './App.css';


const queryClient = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus: false
  }
}})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Films />
    </QueryClientProvider>
  );
}

export default App;
