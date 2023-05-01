import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainMint from './components/MainMint'; 
import Search from './components/Search';
import Home from './components/Home';
import View from './components/View';
import DemoInfo from './components/DemoInfo';
import './App.css';


const client = new ApolloClient({
  uri: 'https://api.studio.thegraph.com/query/44331/diplomint-mainnet/1.0.0',
  cache: new InMemoryCache()
});


function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div>

      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="demo-info" element={<DemoInfo/>}/>
          <Route path="/mint" element={<MainMint accounts={accounts} setAccounts={setAccounts} />}/>
          <Route path="/search" element={<ApolloProvider client={client}><Search/></ApolloProvider>} />
          <Route path="/view/:id" element={<ApolloProvider client={client}><View/></ApolloProvider>}/>
        </Routes>

    </div>
  );
}

export default App;