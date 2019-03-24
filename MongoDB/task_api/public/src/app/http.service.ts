import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private _http: HttpClient) { 
  }
  deleteTask(task_id: string) {
    return this._http.delete('/remove/' + task_id);
  }
  getTasks() {
    return this._http.get('/tasks');
    // temp.subscribe(data => console.log(data))
  };
  getTaskById(task_id: string) {
    return this._http.get('/tasks/' + task_id);
    // temp.subscribe(data => console.log('single', data))
  };
  createTask(task: object) {
    return this._http.post('/tasks/new',task);
  }
  updateTask(task: object) {
    return this._http.put('/tasks/'+ task['_id'],task);
  }

}
