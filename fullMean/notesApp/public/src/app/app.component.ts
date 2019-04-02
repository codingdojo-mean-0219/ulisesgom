import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allNotes;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getNotes();
  }
  
  onCreate(event: object) {
    this.http.createNote(event).subscribe(data => {
      console.log(data);
      this.getNotes();
    });
  };

  getNotes() {
    this.http.getNotes().subscribe(data => {
      this.allNotes = data['docs'];
    })
  }
}
