import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Planet from './Planet';
import IPlanet from '../api-types/Planet';
import IPlanetResponse from '../api-types/PlanetResponse';
import ListHeadline from './ListHeadline';

const PlanetList: React.FC = () => {

  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<IPlanetResponse> = await axios.get<IPlanetResponse>(
          `https://swapi.dev/api/planets/?page=${currentPage}`
        );

        setPlanets(response.data.results);
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
      <h2>Star Wars Planets - Page {currentPage}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
           <ListHeadline headers={["Name", "Terrain", "Climate", "Population"]}></ListHeadline>
          </ul>
          <ul>
            {planets.map((planet) => (
              <Planet key={planet.name} name={planet.name} climate={planet.climate} population={planet.population} terrain={planet.terrain} />
            ))}
          </ul>
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PlanetList;

