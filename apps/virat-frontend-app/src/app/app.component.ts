import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router,Event, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'virat-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'virat-frontend-app';
  loading = false;
  constructor(private readonly router: Router){
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

  }
}
