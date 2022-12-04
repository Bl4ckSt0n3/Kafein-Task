import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NoteAppService } from '../../SharedServices/note-app.service';
import { CreateNoteModel } from './create-note-model.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {

  constructor(
    private noteService: NoteAppService,
    private router: Router,
    private toastr: ToastrService,
    ) { }

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
    this.toastr.success("Created!", "Success", {
      tapToDismiss: true,
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-top-right',
      closeButton: true
    });
  }
  public cancel(): void {
    this.router.navigate(['/notes/getall']);
  }

}
