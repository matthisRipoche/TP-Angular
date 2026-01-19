import { Component, inject } from '@angular/core';
import { PokemonListCards } from '@features/pokemon/components/pokemon-list-cards/pokemon-list-cards';
import { PokemonService } from '@features/pokemon/services/pokemon-service';
import { effect } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonListCards],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.scss'],
})
export class PokemonList {
  private pokemonService = inject(PokemonService);

  // signal du service
  pokemonList = this.pokemonService.pokemonList;

  // Lancement de l'effet directement dans l'injection context
  logEffect = effect(() => {
    if (this.pokemonList()) {
      console.log('Liste de pokémons :', this.pokemonList());
    }
  });

  doConsoleLog() {

  }

  constructor() {
    // lancer la requête HTTP
    this.pokemonService.getPokemons().subscribe();
  }
}
