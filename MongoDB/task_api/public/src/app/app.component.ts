import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allTasks;
  oneTask;
  
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getTasksFromService();
    this.getOneTaskFromService();
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('all', data);
      this.allTasks = data['docs'];
    })
  };
  getOneTaskFromService() {
    let observable = this._httpService.getTaskById('5c8d62017a8b9c2b8c762c08');
    observable.subscribe(data => {
      console.log('single', data);
      this.oneTask = data['doc'];
    })
  }
}

