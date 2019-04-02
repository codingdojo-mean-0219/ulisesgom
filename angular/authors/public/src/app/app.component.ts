import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oneAuthor;
  newAuthor;
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.newAuthor = {title:'', description:''};
  }
  deleteAuthor(author_id: string) {
    let observable = this._httpService.deleteAuthor(author_id);
    observable.subscribe(data => {
      
    })
  }
  getOneAuthorFromService(author_id:string) {
    let observable = this._httpService.getAuthorById(author_id);
    observable.subscribe(data => {
      console.log('single', data);
      this.oneAuthor = data['doc'];
    });
  };

  onSubmitCreate() {
    let observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe(data => {
      
    });
    this.newAuthor = {title:'', description:''};
  };

  onSubmitUpdate() {
    let observable = this._httpService.updateAuthor(this.oneAuthor);
    observable.subscribe(data => {
      
    });
    this.oneAuthor = false;
  }
}

