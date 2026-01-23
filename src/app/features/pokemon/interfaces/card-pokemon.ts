import { Attack } from "@features/pokemon/interfaces/attack";

export interface CardPokemon {
    id: string;
    name: string;
    hp: number;
    pictureUrl: string;
    attacks: Attack[];
    description: string;
}
