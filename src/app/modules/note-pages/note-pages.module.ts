import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotePagesRoutingModule } from './note-pages-routing.module';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotesComponent,
    CreateNoteComponent,
    UpdateNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NotePagesRoutingModule
  ]
})
export class NotePagesModule { }
