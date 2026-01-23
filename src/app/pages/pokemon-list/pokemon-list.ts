import { Component, inject, signal } from '@angular/core';
import { PokemonListCards } from '@features/pokemon/components/pokemon-list-cards/pokemon-list-cards';
import { SearchBar } from '@components/search-bar/search-bar';

import { CardPokemon } from '@features/pokemon/interfaces/card-pokemon';

//Services
import { PokemonService } from '@features/pokemon/services/pokemon.services'


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonListCards, SearchBar],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.scss'],
})
export class PokemonList {
  search = '';
  cardPokemonList = signal<CardPokemon[]>([]);
  pokemonService = inject(PokemonService);

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe(cards => {
      this.cardPokemonList.set(cards);
    });
  }
}
