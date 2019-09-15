import React from 'react';
import styled from 'styled-components';

import CharacterCard from './CharacterCard';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function CharacterList(props) {
  const { starwarsCharacters } = props;
  console.log('characterList', starwarsCharacters);
  return (
    <Container className='characterList'>
      {starwarsCharacters.map((char, index) => (
        <CharacterCard character={char} key={index} />
      ))}
    </Container>
  );
}

export default CharacterList;
