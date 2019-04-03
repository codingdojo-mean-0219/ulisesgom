import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  newPlayer;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.newPlayer = {name: "", position: ""};
  }

  createPlayer(event: Event) {
    event.preventDefault();
    this.http.createPlayer(this.newPlayer)
    .subscribe(data => {
      console.log(data, 'created');
      this.router.navigateByUrl('/');
      
    })
  }
}
