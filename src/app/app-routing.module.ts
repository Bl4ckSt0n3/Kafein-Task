import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { 
  //   path: '**', 
  //   component: LoginComponent 
  // },
  { path: "auth", component: LoginComponent },
  {
    path: 'notes',
    loadChildren: () => import('./modules/note-pages/note-pages.module').then(module => module.NotePagesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
