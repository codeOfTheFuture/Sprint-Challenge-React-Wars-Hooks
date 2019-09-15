import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 45%;
  height: 40vh;
  margin: 1rem;
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-image: url(/assets/hyperspace.gif);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 3px solid #fff;
    margin: 0.81rem;
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

const Character = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  margin: 0 2rem;
`;

const CharacterDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  p {
    width: 8rem;
    text-align: center;
  }
`;

function CharacterCard(props) {
  const {
    character: {
      image,
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
        <Character>
          <img src={`${image}`} alt={`${name}`} />
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
        </Character>
      </Card>
    </CardWrapper>
  );
}

export default CharacterCard;
