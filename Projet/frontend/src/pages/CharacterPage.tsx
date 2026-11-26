import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Character } from "../types/Character";

function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:3000/characters/${id}`);
      const cleanData = (await rawData.json()) as Character;

      setCharacter(cleanData);
    }

    fetchData();
  }, []);

  if (!character) return <p>Chargement du personnage n°{id}...</p>;

  return (
    <article>
      <h2>{character.name}</h2>
      <img src={character.img_url} alt={character.name} />

      <ul>
        <li>Arme : {character.weapon}</li>
        <li>Force : {character.strength}</li>
        <li>Magie : {character.magic}</li>
        <li>Vitesse : {character.speed}</li>
        <li>Défense : {character.defense}</li>
        <li>Résistance : {character.resistance}</li>
        <li>Charme : {character.charm}</li>
      </ul>
    </article>
  );
}

export default CharacterPage;
