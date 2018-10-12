import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Task Manager';

  constructor() {}
}
