import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/login/login.component';
import { LoginFormComponent } from './core/login/login-form/login-form.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotePagesModule } from './modules/note-pages/note-pages.module';
import { NotePagesRoutingModule } from './modules/note-pages/note-pages-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    // BrowserModule,
    CommonModule,
    AppRoutingModule,
    NotePagesModule,
    NotePagesRoutingModule,
    NgbModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
