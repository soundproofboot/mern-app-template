import './App.css';
import Home from './pages/Home';

// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/*other routes */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;