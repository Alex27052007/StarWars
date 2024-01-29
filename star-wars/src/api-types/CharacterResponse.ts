import ICharacter from "./Character";

interface ICharacterResponse {
    results: ICharacter[];
    next: string | null; 
    count: number;
  }

export default ICharacterResponse;