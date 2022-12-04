import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/Guard/auth.guard';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: 'getall', component: NotesComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateNoteComponent, canActivate: [AuthGuard] },
  // { path: 'getall', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotePagesRoutingModule { }
