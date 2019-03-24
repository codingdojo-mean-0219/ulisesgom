import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllCakes() {
    console.log('getall')
    return this._http.get('/cakes');
  }
  getOneCake(cake_id: string) {
    return this._http.get('/cakes/' + cake_id);
  }
  createCake(cake: object) {
    return this._http.post('/cakes/new', cake);
  }
  updateRating(cake_id: string, rating: object) {
    return this._http.put('/cakes/'+ cake_id, rating);
  }
}
