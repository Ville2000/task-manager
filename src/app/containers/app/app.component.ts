import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <navigation [title]="title"></navigation>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  public title = 'Tehtävämanageri';

  constructor() {}
}
