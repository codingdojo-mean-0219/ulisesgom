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

  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('all', data);
      this.allTasks = data['docs'];
    })
  };
  getOneTaskFromService(task_id:string) {
    let observable = this._httpService.getTaskById(task_id);
    observable.subscribe(data => {
      console.log('single', data);
      this.oneTask = data['doc'];
    })
  }
}

