import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface pokeApiObj {
  abilities: any[];
  name: string;
};

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  this.getPokemon();
  };

  

  getPokemon(){
      let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      bulbasaur.subscribe(data => {
        for(var i of data["abilities"]) {
          console.log(i.ability.name);
        }});
      
      let ability = this._http.get('https://pokeapi.co/api/v2/ability/65/');
      ability.subscribe(data => {
        console.log(`There are ${data['pokemon'].length} pokemon with the ${data['name']} ability`)
      })
      
  }
}
