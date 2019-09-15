import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { charImages } from './data';

import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';

import './App.css';

const App = () => {
  const [starwarsPages, setStarwarsPages] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const [starwarsCharacters, setstarwarsCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/').then(res => {
      const {
        data: { count },
        data: { results },
      } = res;

      console.log('data', res.data);
      results.forEach((character, index) => {
        character.image = charImages[index].imgUrl;
      });

      const pageNum = count % 10 === 0 ? count / 10 : Math.ceil(count / 10);

      const pages = [];

      for (let i = 0; i < pageNum; i++) {
        pages.push((i + 1).toString());
      }

      setStarwarsPages(pages);
      setCurrentPage(pages[0]);
      setstarwarsCharacters(results);
    });
  }, []);

  const fetchPage = page => {
    axios.get(`https://swapi.co/api/people/?page=${Number(page)}`).then(res => {
      const {
        data: { results },
      } = res;

      results.forEach((character, index) => {
        let charImgIndex = (Number(page) - 1) * 10 + index;
        character.image = charImages[charImgIndex].imgUrl;
      });

      setstarwarsCharacters(results);
      setCurrentPage(page);
    });
  };

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <CharacterList starwarsCharacters={starwarsCharacters} />
      <Pagination
        pages={starwarsPages}
        currentPage={currentPage}
        fetchPage={fetchPage}
      />
    </div>
  );
};

export default App;
