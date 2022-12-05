import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first, map } from 'rxjs';
import { NoteAppService } from 'src/app/modules/SharedServices/note-app.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login-form',
  template: `
  <div class="form-group">
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="mt-3">
            <label class="h5" for="Item" style="color: #fff;">Username </label>
            <input type="text" class="form-control" id="Item" placeholder="username" formControlName="username" required="true">
            <div *ngIf="fControls['username'].invalid && (fControls['username'].dirty || fControls['username'].touched)" class="alert alert-danger">
              <div *ngIf="fControls['username'].errors?.['required']">
                Username is required.
              </div>
            </div>
        </div>
        <div class="mt-3">
            <label class="h5" for="Id" style="color: #fff;">Password: </label>
            <input type="password" class="form-control" id="Id" placeholder="password" formControlName="password" required>
            <div *ngIf="fControls['password'].invalid && (fControls['password'].dirty || fControls['password'].touched)" class="alert alert-danger">
              <div *ngIf="fControls['password'].errors?.['required']">
                Password is required.
              </div>
            </div>
        </div>
        <div class="mt-3">
            <button class="btn btn-secondary" 
                    type="submit"
                    [disabled]="!loginForm.valid"
            >Login <span><i class="fa fa-sign-in" aria-hidden="true"></i></span>
            </button>
            
        </div>
    </form>
  </div>`
})
export class LoginFormComponent {

  constructor(
    private sharedService: NoteAppService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient) { }

  // loginform içindeki formcontrol özelliklerini kullanmak için oluşturuldu.
  public get fControls() {
    return this.loginForm.controls;
  }

  // login operasyonunda gelen veriyi aldığımız yapı
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    this.sharedService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe(
      (success: any) => {
      if (success.data["message"] == "success") {
        localStorage.setItem('userdata', success.data["username"]);
        this.router.navigate(['/notes/getall']);
      }
      
    },(error: any) => {
        this.toastr.error("Username or Password is not valid", error);
      }
    );
  }

}
