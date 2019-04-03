import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  createPlayer(player: object) {
    return this.http.post('/player/new', player);
  }
  deletePlayer(player_id: string) {
    return this.http.delete('/player/' + player_id);
  }
  getPlayers() {
    return this.http.get('/players');
  };
  updateStatus(status: number, author_id: string) {
    return this.http.put('status/' + author_id, {status});
  }

}
