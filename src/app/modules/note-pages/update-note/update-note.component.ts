import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateNoteModel } from './update-note-model.model';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent {

  constructor(public activeModal: NgbActiveModal) { }
  @Output() passEntry: EventEmitter<object> = new EventEmitter(); 
  
  editData: any; // parent component olan todo-full içinden gönderiliyor.
  

  textForm = new FormGroup({
    noteText: new FormControl('', [Validators.required]),
    priority: new FormControl(''),
    id: new FormControl('')
  });

  public get formControls() {
    return this.textForm.controls;
  }
  
  confirm() {
    var out: UpdateNoteModel = new UpdateNoteModel(
      this.textForm.get('noteText')?.value,
      this.textForm.get('priority')?.value,
      this.textForm.get('id')?.value,
    )
    this.passEntry.emit(out);
    this.activeModal.close('Cross click');
  }

}
