import { Component } from "@angular/core";

@Component({
    selector: 'navigation',
    styleUrls: ['./navigation.component.css'],
    template: `
        <h1>Tehtävämanageri</h1>
        <a routerLink="/">Tehtävälista</a>
    `
})

export class NavigationComponent {}