// StarWarsCharacter.tsx
import React from 'react';
import './ListHeadline.css';

interface HeadlineProps {
    headers: string[]
}

const ListHeadline: React.FC<HeadlineProps> = (props: HeadlineProps) : React.ReactNode => {

  console.log()
  return (
    <li className="header">
    { props.headers.map(header =>  <div className="name">{header}</div>)}
    </li>
  );
};

export default ListHeadline;
