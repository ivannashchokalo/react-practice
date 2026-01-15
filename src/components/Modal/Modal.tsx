import { createPortal } from "react-dom";
import styles from "./ Modal.module.css";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import type { CharacterDetails } from "../../types/characterDetailes";
import { getCharacterDetails } from "../../api/api";

interface ModalProps {
  onClose: () => void;
  characterId: number;
}

export default function Modal({ onClose, characterId }: ModalProps) {
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const dataDetailes = await getCharacterDetails(characterId);
        setCharacter(dataDetailes);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDetails();
  }, [characterId]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.currentTarget === e.target) onClose();
  }

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          <FiX size={24} />
        </button>
        {isLoading && <h1 className={styles.loadingMessage}>Loading...</h1>}

        {isError && <p className={styles.errorMessage}>Error</p>}
        {character && (
          <div className={styles.characterDetails}>
            <h2 className={styles.characterName}>{character.name}</h2>
            <p className={styles.characterEmail}>Email: {character.email}</p>
            <p className={styles.characterWebsite}>
              Website: {character.website}
            </p>
            <p className={styles.characterCompany}>
              Company: {character.company.name}
            </p>
            <p className={styles.characterStreet}>
              Street: {character.address.street}
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
