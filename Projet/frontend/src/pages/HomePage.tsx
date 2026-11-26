import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Character } from "../types/Character";

function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/characters");
      const cleanData = (await rawData.json()) as Character[];

      setCharacters(cleanData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fire Emblem Characters</h1>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
