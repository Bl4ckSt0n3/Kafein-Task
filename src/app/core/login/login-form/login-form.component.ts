import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
  <div class="form-group">
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="mt-3">
            <label class="h5" for="Item" style="color: #fff;">E-mail </label>
            <input type="email" class="form-control" id="Item" placeholder="email" formControlName="email" required="true">
            <div *ngIf="fControls['email'].invalid && (fControls['email'].dirty || fControls['email'].touched)" class="alert alert-danger">
              <div *ngIf="fControls['email'].errors?.['required']">
                Email is required.
              </div>
              <div *ngIf="fControls['email'].errors?.['email']">
                Email is not valid.
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
            <button class="btn btn-primary" 
                    type="submit"
                    [disabled]="!loginForm.valid"
            >Login
            </button>
        </div>
    </form>
  </div>`
})
export class LoginFormComponent {

  constructor() { }

  // loginform içindeki formcontrol özelliklerini kullanmak için oluşturuldu.
  public get fControls() {
    return this.loginForm.controls;
  }

  // login operasyonunda gelen veriyi aldığımız yapı
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {

  }

}
