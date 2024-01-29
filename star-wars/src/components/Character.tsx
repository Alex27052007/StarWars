// StarWarsCharacter.tsx
import React from 'react';
import './Character.css';
import ICharacter from '../api-types/Character';

const Character: React.FC<{ character: ICharacter }> = ({ character }) => {
  const { name, gender, birth_year } = character;

  return (
    <li className="character">
      <div className="name">{name}</div>
      <div className="details">{gender}</div>
      <div className="details">{birth_year}</div>
    </li>
  );
};

export default Character;
