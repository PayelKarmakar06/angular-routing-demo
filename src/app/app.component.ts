import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h2>Here we begin with the world of possibilities- </h2>
    <ul>
      <a routerLink="/viewdetails">Dashboard</a> |
      <a routerLink="/about">About</a>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-lazy-load';
}
