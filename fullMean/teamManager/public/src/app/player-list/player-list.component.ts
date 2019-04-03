import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
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

  deletePlayer(player_id: string) {
    if(confirm('Are you sure you wish to remove this player?')) {
      this.http.deletePlayer(player_id)
      .subscribe(data=> {
        console.log(data);
        this.getPlayers();
      })
    } else {return}    
  };

}
