import { Injectable, inject, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonPageData } from '@features/pokemon/interfaces/pokemon-page-data'

import { CardPokemon } from '@features/pokemon/interfaces/card-pokemon'
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    http = inject(HttpClient);
    BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=3000';

    private mapToCardPokemon(apiPokemon: { name: string; url: string }): CardPokemon {
        const id = apiPokemon.url.split('/').filter(Boolean).pop()!;

        return {
            id: id,
            name: apiPokemon.name,
            hp: 50,
            pictureUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            attacks: [
                { name: 'attack1', power: 10 },
                { name: 'attack2', power: 20 }
            ],
            description: `Description du Pokémon ${apiPokemon.name}`
        };
    }

    getAllPokemon(): Observable<CardPokemon[]> {
        const result = this.http.get<PokemonPageData>(this.BASE_URL).pipe(
            map(res => res.results.map(this.mapToCardPokemon))
        );

        return result;
    }


}