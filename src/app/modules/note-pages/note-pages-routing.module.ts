import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: 'getall', component: NotesComponent },
  { path: 'create', component: CreateNoteComponent },
  // { path: 'getall', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotePagesRoutingModule { }
