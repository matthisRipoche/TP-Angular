import { Component, input } from '@angular/core';
import { CardPokemon } from '@features/pokemon/interfaces/card-pokemon';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCard {
  defaultData = {
    name: "Unknown",
    hp: 0,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    attacks: [
      { name: 'defaultAttack1', power: 0 },
      { name: 'defaultAttack2', power: 0 },
    ],
    description: "Petite Description par défault du pokemon"
  };
  data = input<CardPokemon>(this.defaultData as CardPokemon)
}
