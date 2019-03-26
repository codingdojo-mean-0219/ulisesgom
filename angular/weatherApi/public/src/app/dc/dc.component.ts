import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  city;
  worked;

  constructor(private appComp: AppComponent) { }

  ngOnInit() {
    this.appComp.getWeatherFromService(this, 'dc');
  }
}
