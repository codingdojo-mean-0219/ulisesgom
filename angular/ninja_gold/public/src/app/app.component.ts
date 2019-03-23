import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  gold: number;
  log: any;

  constructor(private _httpService: HttpService) {};

  createUser(name: string) {
    let observable = this._httpService.createUser({name});
    observable.subscribe(data => {
      console.log('data', data);
      this.name = data['doc']['name'];
      this.gold = data['doc']['gold'];
      this.log = data['doc']['log'];
    })
  }
  processGold(place: string) {
    let observable = this._httpService.processGold(this.name,place);
    observable.subscribe(data => {
      console.log("got gold", data);
      this.gold = data['user']['gold'];
      this.log = data['user']['log']
      // this.log.push(data['doc']['log'][-1])
    })
  }
  returnUser(name: string) {
    let observable = this._httpService.returnUser(name);
    observable.subscribe(data => {
      console.log('data', data);
      this.name = data['doc']['name'];
      this.gold = data['doc']['gold'];
      this.log = data['doc']['log'];
    })
  }
}
