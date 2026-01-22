import { Component } from '@angular/core';
import { PokemonListCards } from '@features/pokemon/components/pokemon-list-cards/pokemon-list-cards';
import { SearchBar } from '@components/search-bar/search-bar';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonListCards, SearchBar],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.scss'],
})
export class PokemonList {
  search = '';
}
