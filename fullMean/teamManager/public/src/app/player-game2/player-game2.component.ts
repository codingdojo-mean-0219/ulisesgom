import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-player-game2',
  templateUrl: './player-game2.component.html',
  styleUrls: ['./player-game2.component.css']
})
export class PlayerGame2Component implements OnInit {
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
