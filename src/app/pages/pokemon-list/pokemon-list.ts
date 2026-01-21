import { Component } from '@angular/core';
import { PokemonListCards } from '@features/pokemon/components/pokemon-list-cards/pokemon-list-cards';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonListCards],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.scss'],
})
export class PokemonList {

}
