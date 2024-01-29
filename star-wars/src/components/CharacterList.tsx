// StarWarsList.tsx
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Character from './Character';
import ICharacterResponse from '../api-types/CharacterResponse';
import ICharacter from '../api-types/Character';
import ListHeadline from './ListHeadline';

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<ICharacterResponse> = await axios.get<ICharacterResponse>(
          `https://swapi.dev/api/people/?page=${currentPage}`
        );

        setCharacters(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Star Wars Characters - Page {currentPage}</h2>
      
        <>
          <ul>
           <ListHeadline headers={["Name", "Gender", "Born in"]}></ListHeadline>
          </ul>

          { loading ? (
             <p>Loading...</p>
          ) : (
          
          <ul>
            {characters.map((character) => (
              <Character key={character.name} character={character} />
            ))}
          </ul>
          )}
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>

    </div>
  );
};

export default CharacterList;

