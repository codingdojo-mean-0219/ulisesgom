import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-game3',
  templateUrl: './player-game3.component.html',
  styleUrls: ['./player-game3.component.css']
})
export class PlayerGame3Component implements OnInit {
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
  };

  changeStatus(status: number, player_id: string) {
    this.http.updateStatus(status, player_id)
    .subscribe(data => {
      console.log(data);
      this.getPlayers();
    })
  };
}
