import { Component } from '@angular/core';
import { Attack } from '@features/pokemon/interfaces/attack';
import { CardPokemon } from '@features/pokemon/interfaces/card-pokemon';

import { PokemonCard } from '@features/pokemon/components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-pokemon-list-cards',
  imports: [PokemonCard],
  templateUrl: './pokemon-list-cards.html',
  styleUrl: './pokemon-list-cards.scss',
})
export class PokemonListCards {

  cardPokemon1: CardPokemon = {
    name: "Bulbizar",
    hp: 50,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    attacks: [
      { name: 'attack1', power: 5 },
      { name: 'attack2', power: 10 },
    ],
    description: "Petite Description du pokemon"
  };

  cardPokemon2: CardPokemon = {
    name: "ivysaur",
    hp: 60,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    attacks: [
      { name: 'attack1', power: 10 },
      { name: 'attack2', power: 15 },
    ],
    description: "Petite Description du pokemon 2"
  };

  cardPokemon3: CardPokemon = {
    name: "venusaur",
    hp: 80,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    attacks: [
      { name: 'attack1', power: 20 },
      { name: 'attack2', power: 30 },
    ],
    description: "Petite Description du pokemon 3"
  };

  cardPokemon4: CardPokemon = {
    name: "charmander",
    hp: 39,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    attacks: [
      { name: 'attack1', power: 5 },
      { name: 'attack2', power: 10 },
    ],
    description: "Petite Description du pokemon 4"
  };

  cardPokemon5: CardPokemon = {
    name: "charmeleon",
    hp: 58,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    attacks: [
      { name: 'attack1', power: 10 },
      { name: 'attack2', power: 20 },
    ],
    description: "Petite Description du pokemon 5"
  };

  cardPokemon6: CardPokemon = {
    name: "charizard",
    hp: 78,
    pictureUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    attacks: [
      { name: 'attack1', power: 20 },
      { name: 'attack2', power: 40 },
    ],
    description: "Petite Description du pokemon 6"
  };
}
