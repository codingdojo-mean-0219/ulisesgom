import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city;
  worked;
  constructor(private appComp: AppComponent) { }

  ngOnInit() {
    this.appComp.getWeatherFromService(this, 'dc');
  }

}
