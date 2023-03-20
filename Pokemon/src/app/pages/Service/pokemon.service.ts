import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemon, IPokemonDetails } from '../Interface/interface';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getData(name: string) {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }


  pokemonList: IPokemon[] = [];
  filteredList: IPokemon[] = [];
  selectedPokemonDetails: IPokemonDetails | null = null;
  searchQuery: string = '';


  search(): void {
    if (!this.searchQuery) {
      this.filteredList = this.pokemonList;
    } else {
      this.filteredList = this.pokemonList.filter(pokemon => pokemon.name.includes(this.searchQuery));
    }
  }
  

  selectPokemon(pokemon: IPokemon): void {
    this.http.get<IPokemonDetails>(pokemon.url)
      .subscribe(data => {
        const abilities = data.abilities.map(ability => ({ ability: { name: ability.ability.name } }));
        const types = data.types.map(type => ({ type: { name: type.type.name } }));
        
        this.selectedPokemonDetails = {
          name: data.name,
          height: data.height,
          abilities: abilities,
          types: types
        };
      });
  }
}