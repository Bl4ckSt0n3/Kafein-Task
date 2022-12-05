import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KafeinTest';
  enable: boolean = true;
  constructor (
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/auth") {
          localStorage.removeItem('userdata');
        }
      }
    })
  }
}
