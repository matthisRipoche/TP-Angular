import { Component, input, computed } from '@angular/core';
import { CardPokemon } from '@features/pokemon/interfaces/card-pokemon';

import { PokemonCard } from '@features/pokemon/components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-pokemon-list-cards',
  imports: [PokemonCard],
  templateUrl: './pokemon-list-cards.html',
  styleUrl: './pokemon-list-cards.scss',
})
export class PokemonListCards {

  filter = input("");
  cardPokemonList = input<CardPokemon[]>([]);

  filteredPokemonList = computed(() => {
    const value = this.filter().toLowerCase();

    return this.cardPokemonList().filter(pokemon =>
      pokemon.name.toLowerCase().includes(value)
    );
  });
}
