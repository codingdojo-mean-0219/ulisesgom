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
  newTask;
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.newTask = {title:'', description:''};
    this.getTasksFromService();
  }
  deleteTask(task_id: string) {
    let observable = this._httpService.deleteTask(task_id);
    observable.subscribe(data => {
      this.getTasksFromService();
    })
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
    });
  };

  onSubmitCreate() {
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      this.getTasksFromService();
    });
    this.newTask = {title:'', description:''};
  };

  onSubmitUpdate() {
    let observable = this._httpService.updateTask(this.oneTask);
    observable.subscribe(data => {
      this.getTasksFromService();
    })
    this.oneTask = false;
  }
}

