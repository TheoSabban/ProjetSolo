import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("http://localhost:3000/characters");
      const data = await response.json();

      setCharacters(data);
    }

    getCharacters();
  }, []);

  return (
    <div>
      <h1>Fire Emblem Characters</h1>

      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}

export default App;
