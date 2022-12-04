import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) { 
    console.log(localStorage.getItem('userdata'));
    this.isUser()
  }

  navbarCollapsed = true;
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  public isUser(): boolean {
    return localStorage.getItem('userdata') == null || typeof localStorage.getItem('userdata') == 'undefined' ? false : true;
  }
  // isUser: boolean = localStorage.getItem('userdata') != null || typeof localStorage.getItem('userdata') != 'undefined' ? true : false;
  public logout(): void {
    localStorage.removeItem('userdata');
    this.router.navigate(['/auth']);
  }

}
