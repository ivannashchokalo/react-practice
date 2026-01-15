import { useEffect, useState } from "react";
import { getCharactersFromAPI } from "../../api/api";
import type { Character } from "../../types/character";
import styles from "./Section.module.css";
import Modal from "../Modal/Modal";

export default function Section() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null
  );

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const dataCharacters = await getCharactersFromAPI();
        setCharacters(dataCharacters);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <section className={styles.characterList}>
      <h2 className={styles.characterTitle}>Characters</h2>

      {isLoading && <p className={styles.message}>Loading...</p>}
      {isError && <p className={styles.message}>Something went wrong...</p>}

      {!isLoading && !isError && characters.length > 0 && (
        <ul className={styles.characters}>
          {characters.map(({ id, name, email }) => (
            <li key={id} className={styles.characterItem}>
              <h3 className={styles.characterName}>{name}</h3>
              <p className={styles.characterEmail}>{email}</p>
              <button
                className={styles.openDetailsButton}
                onClick={() => setSelectedCharacterId(id)}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
      {selectedCharacterId && (
        <Modal
          onClose={() => setSelectedCharacterId(null)}
          characterId={selectedCharacterId}
        />
      )}
    </section>
  );
}
