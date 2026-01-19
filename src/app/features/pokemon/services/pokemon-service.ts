import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap, catchError, map } from 'rxjs';

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private http = inject(HttpClient);
  public pokemonList = signal<PokemonList | null>(null)
  readonly url = 'https://pokeapi.co/api/v2/pokemon';

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<PokemonList>(this.url).pipe(
      tap(pokemonList => this.pokemonList.set(pokemonList)),
      map(pokemonList => pokemonList.results),
      catchError(error => {
        console.error('Erreur lors de la récupération des pokemons', error);
        throw error;
      })
    );
  }

}
