import {Injectable} from '@angular/core'; //esto lo que hace es conseguir que se pueda usar en todas las paginas, es un metadata 
import { Pokemon } from '../interfaces/pokemons';

/*
  importamos Injectable, Sirve parar crear variables globles 
  para poder usar estas variables desde cualquier otra pagina
*/


// creamos un injectable que exporta la clase globals
@Injectable()
export class Globals {
  
  // creamos un array  de pokemons con objetos pokemon
pokemons: Pokemon[];

constructor() {
  // le pasamos los parametros de pokemons.ts y lo rellenamos con lo que queramos, con esto conseguimos
  //crear una lista por defecto que aparecera siempre
  this.pokemons = [{
    nombre: 'Pikachu',
    tipo: 'Pikachu es de   tipo Electrico',
  },
  {
    nombre: 'Mewtwo',
    tipo: 'Mewtwo es de tipo Psiquico',
  },
  {
    nombre: 'Cyndaquill',
    tipo: 'Cyndaquill es de tipo Fuego',
  }
];
  

}

}