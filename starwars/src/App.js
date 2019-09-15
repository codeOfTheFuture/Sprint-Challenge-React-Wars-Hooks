import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterList from './components/CharacterList';

import './App.css';

const App = () => {
  const [starwars, setStarwars] = useState({});
  const [starwarsCharacters, setstarwarsCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/').then(res => {
      const {
        data,
        data: { results },
      } = res;

      setStarwars(data);
      setstarwarsCharacters(results);
    });
  }, []);

  console.log(starwars);
  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <CharacterList starwarsCharacters={starwarsCharacters} />
    </div>
  );
};

export default App;
