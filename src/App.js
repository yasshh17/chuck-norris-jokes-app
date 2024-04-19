import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';

function App() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1> Tickles Town </h1>
      <button onClick={fetchJoke} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Joke'}
      </button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default App;
