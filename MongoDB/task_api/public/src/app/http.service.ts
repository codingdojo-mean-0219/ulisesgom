import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getTaskById('5c8d62017a8b9c2b8c762c08');
  }
  getTasks() {
    let temp = this._http.get('/tasks');
    temp.subscribe(data => console.log(data))
  };
  getTaskById(task_id: string) {
    let temp = this._http.get('/tasks/' + task_id);
    temp.subscribe(data => console.log('single', data))
  };

}
