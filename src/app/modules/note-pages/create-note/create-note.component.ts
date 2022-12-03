import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  constructor() { }

  noteText: string = "";

  onSubmit() {
    const data = {
      note: this.noteText
    }
    // send this data to mock api service
    console.log(data);
  }
  ngOnInit(): void {
  }

}
