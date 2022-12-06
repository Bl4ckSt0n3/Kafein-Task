import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotePagesRoutingModule } from './note-pages-routing.module';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    NotesComponent,
    CreateNoteComponent,
    UpdateNoteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotePagesRoutingModule,
    NgbDropdownModule,
    Ng2SearchPipeModule,
    // BrowserAnimationsModule,
    // BrowserModule,
    ToastrModule.forRoot({
      tapToDismiss : true,
      timeOut: 5000,
      progressBar : true,
      progressAnimation : 'decreasing',
      autoDismiss: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    }),
  ]
})
export class NotePagesModule { }
