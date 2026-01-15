export interface CharacterDetails {
    id: number;
    name: string;
    email: string;
    website: string;
    company: {
        name: string;
    }
    address: {
        street: string;
    }
}
