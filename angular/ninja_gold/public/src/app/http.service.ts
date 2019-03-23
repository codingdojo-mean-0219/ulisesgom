import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getAll();
  };
  getAll() {
    let obs = this._http.get('/golds');
    obs.subscribe(data => {
      console.log(data);
    })
  };

  createUser(name: object) {
    return this._http.post('/gold/new',name);
  };

  processGold(user:string, place: string) {
    return this._http.get(`/gold/${place}/${user}`)
  }

  returnUser(name: string) {
    return this._http.get('/gold/'+name);
  }
  
}
