// StarWarsCharacter.tsx
import React from 'react';
import './Character.css';
import IPlanet from '../api-types/Planet';

const Planet: React.FC<IPlanet> = (props: IPlanet) => {
  const { name, terrain, climate, population  } = props;

  console.log()
  return (
    <li className="character">
      <div className="name">{name}</div>
      <div className="details">{terrain}</div>
      <div className="details">{climate}</div>
      <div className="details">{population}</div>
    </li>
  );
};

export default Planet;
