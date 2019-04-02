import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() 
  createNote = new EventEmitter();
  newNote;
  constructor() { }

  ngOnInit() {
    this.newNote = {note:''};
  };

  onSubmit(event: Event) {
    event.preventDefault();
    
    this.createNote.emit(this.newNote);

    this.newNote = {note:''};
  }
}
