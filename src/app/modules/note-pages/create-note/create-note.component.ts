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

  url: any = '';
  // noteText!: string;
  textForm = new FormGroup({
    noteText: new FormControl('', [Validators.required]),
    priority: new FormControl(''),
    image: new FormControl(''),
  });

  public get formControls() {
    return this.textForm.controls;
  }

  
  onFileSelected(event: any) {
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.url = event.target.result;
      // console.log(this.url);
    };
  }
  onSubmit() {

    const textData: CreateNoteModel = new CreateNoteModel(
      this.textForm.get('noteText')?.value,
      this.textForm.get('priority')?.value,
      // this.textForm.get('image')?.value
      this.url
    );

    // send this data to mock api service
    this.noteService.create(textData).subscribe(
      (success: any) => {
        if (success.message == "success") {
          this.toastr.success("Created!", "Success", {
            tapToDismiss: true,
            timeOut: 5000,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: 'toast-top-right',
            closeButton: true
          });
        }
        
      },
      (error: any) => {
        this.toastr.error("Error!", "Something went wrong!", {
          tapToDismiss: true,
          timeOut: 5000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-top-right',
          closeButton: true
        });
      });
        
  }
  public cancel(): void {
    this.router.navigate(['/notes/getall']);
  }

}
