import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city;
  worked;

  constructor(private appComp: AppComponent) { }

  ngOnInit() {
    this.appComp.getWeatherFromService(this, 'seattle');
  }

}
