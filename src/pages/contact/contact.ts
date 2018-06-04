import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globals } from '../../providers/globals';
import { Pokemon } from '../../interfaces/pokemons';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
//le definimos que nuevoPokemon tiene nombre + tipo
  nuevoPokemon: Pokemon = {
    nombre: '',
    tipo:''
  }
  
  //crear un pokemon nuevo el cual coje las variables  de globals y le añade lo que hemos introducido en el formulario
  //y lo empuja a globals.pokemons como un nuevo pokemon de esta forma agregagandolo a la lista de pokemons
  anadir(){
    let pokemon: Pokemon = {
      nombre: this.nuevoPokemon.nombre,
      tipo: this.nuevoPokemon.tipo,
    }
    this.globals.pokemons.push(pokemon);
  }




  constructor(public navCtrl: NavController, private globals: Globals) {

  }

}
