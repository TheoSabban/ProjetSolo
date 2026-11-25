import { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  weapon: string;
  strength: number;
  magic: number;
  speed: number;
  defense: number;
  resistance: number;
  charm: number;
  img_url: string;
};

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/characters");
      const cleanData = (await rawData.json()) as Character;

      setCharacters(cleanData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fire Emblem Characters</h1>

      {characters.map((character) => (
        <p key={character.id}>
          <h2>{character.name}</h2>
          <li>
            <img src={character.img_url} />
          </li>

          <ul>
            <li>Arme : {character.weapon}</li>
            <li>Force : {character.strength}</li>
            <li>Magie : {character.magic}</li>
            <li>Vitesse : {character.speed}</li>
            <li>Défense : {character.defense}</li>
            <li>Résistance : {character.resistance}</li>
            <li>Charme : {character.charm}</li>
          </ul>
        </p>
      ))}
    </div>
  );
}

export default App;
