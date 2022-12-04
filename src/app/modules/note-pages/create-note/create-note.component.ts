import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteAppService } from '../../SharedServices/note-app.service';
import { CreateNoteModel } from './create-note-model.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  constructor(private noteService: NoteAppService) { }

  // noteText!: string;

  
  textForm = new FormGroup({
    noteText: new FormControl('', [Validators.required]),
    priority: new FormControl('')
  });

  public get formControls() {
    return this.textForm.controls;
  }
  onSubmit() {

    const textData: CreateNoteModel = new CreateNoteModel(
      this.textForm.get('noteText')?.value,
      this.textForm.get('priority')?.value
    );

    // send this data to mock api service
    this.noteService.create(textData).subscribe((e: any) => e);
    // console.log(textData);
  }
  ngOnInit(): void {
  }

}
