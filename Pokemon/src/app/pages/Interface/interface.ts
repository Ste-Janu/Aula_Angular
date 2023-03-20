export interface IPokemon {
    name: string;
    url: string;
  }
  
  export interface IPokemonDetails {
    name: string;
    height: number;
    types: Array <{type : { name:string}}>;
    abilities: Array<{ ability: { name: string } }>;
}