import IPlanet from "./Planet";

interface IPlanetResponse {
    results: IPlanet[];
    next: string | null; 
    count: number;
  }

export default IPlanetResponse;