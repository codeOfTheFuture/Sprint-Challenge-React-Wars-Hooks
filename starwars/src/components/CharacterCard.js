import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 45%;
  height: 40vh;
  margin: 1rem;
  border-radius: 5px;
  position: relative;

  &:hover {
    background-image: url(/assets/hyperspace.gif);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: white;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const CharacterDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: 12rem;
  p {
    width: 10rem;
    text-align: center;
  }
`;

function CharacterCard(props) {
  const {
    character: {
      name,
      birth_year,
      eye_color,
      films,
      gender,
      hair_color,
      height,
      mass,
      skin_color,
      url,
    },
  } = props;

  return (
    <CardWrapper>
      <Card className='character'>
        <h2>{name}</h2>
        <CharacterDetails>
          <p>{`Gender: ${gender}`}</p>
          <p>{`Birth Year: ${birth_year}`}</p>
          <p>{`Height: ${height}`}</p>
          <p>{`Mass: ${mass}`}</p>
          <p>{`Hair Color: ${hair_color}`}</p>
          <p>{`Eye Color: ${eye_color}`}</p>
          <p>{`Skin Color: ${skin_color}`}</p>
          <p>{`Skin Color: ${skin_color}`}</p>
          <p>{`No. of Films: ${films.length}`}</p>
        </CharacterDetails>
      </Card>
    </CardWrapper>
  );
}

export default CharacterCard;
