import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Globals } from '../../providers/globals';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pokemon_list: any;

  constructor(public navCtrl: NavController, private globals: Globals) {
    this.pokemon_list = this.globals.pokemons;
  }

}
