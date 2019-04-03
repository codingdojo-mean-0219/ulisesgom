import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { getPlayers } from '@angular/core/src/render3/players';

@Component({
  selector: 'app-player-game1',
  templateUrl: './player-game1.component.html',
  styleUrls: ['./player-game1.component.css']
})
export class PlayerGame1Component implements OnInit {
  players;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.http.getPlayers()
    .subscribe(data => {
      this.players = data['docs'];
    })
  }
  changeStatus(status: number, player_id: string) {
    this.http.updateStatus(status, player_id)
    .subscribe(data => {
      console.log(data);
      this.getPlayers();
    })
  }
}
