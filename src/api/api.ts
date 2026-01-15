import axios from "axios";
import type { Character } from "../types/character";
import type { CharacterDetails } from "../types/characterDetailes";

export async function getCharactersFromAPI(): Promise<Character[]> {
    const response = await axios.get<Character[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

export async function getCharacterDetails(id: number): Promise<CharacterDetails>{
    const response = await axios.get<CharacterDetails>(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.data;
}