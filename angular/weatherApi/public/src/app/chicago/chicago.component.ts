import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  city;
  worked;
  constructor(private appComp: AppComponent) { }

  ngOnInit() {
    this.appComp.getWeatherFromService(this, 'chicago');
  }

}
