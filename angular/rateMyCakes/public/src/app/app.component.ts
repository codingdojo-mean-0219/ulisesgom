import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  allCakes;
  oneCake;
  cakeForm;
  updateRating;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.cakeForm = {name:"", cakeUrl:""};
    this.getCakes();
    this.updateRating = {score:"", comment:""};
  }
  createCake() {
    console.log(this.cakeForm)
    let observable = this._httpService.createCake(this.cakeForm);
    observable.subscribe(data => {
      this.getCakes();
    });
    this.cakeForm = {name:"", cakeUrl:""};
  }
  getCakes() {
    let observable = this._httpService.getAllCakes();
    observable.subscribe(data => {
      this.allCakes = data['docs'];
    })
  }
  getOneCake(cake_id: string) {
    let observable = this._httpService.getOneCake(cake_id);
    observable.subscribe(data => {
      let sum = 0;
      for(let rating of data['doc']['rating']) {
        sum += rating.score;
      };
      this.oneCake = data['doc'];
      this.oneCake.averageRating = sum / data['doc']['rating'].length;
    })
  }
  rateCake(cake_id: string) {
    let observable = this._httpService.updateRating(cake_id, this.updateRating);
    observable.subscribe(data => {
      console.log(data);

    });
    this.updateRating = {score:"", comment:""};
  }

}
