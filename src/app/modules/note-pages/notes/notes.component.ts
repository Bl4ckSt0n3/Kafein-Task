import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { NoteAppService } from '../../SharedServices/note-app.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NoteAppService]
})
export class NotesComponent implements OnInit {

  notes: any = [];
  constructor(private service: NoteAppService) {
    this.service.read().subscribe((elem: any) => {
      elem.forEach((element: any) => {
        this.notes.push(element);
      });
    })
    console.log(this.notes);
  }

  ngOnInit(): void {
  }

}
