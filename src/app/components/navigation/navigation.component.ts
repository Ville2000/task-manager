import { Component, Input } from "@angular/core";

@Component({
    selector: 'navigation',
    styleUrls: ['./navigation.component.css'],
    template: `
        <h1>{{ title }}</h1>
        <a routerLink="/">Tehtävälista</a>
    `
})

export class NavigationComponent {
    @Input() title: string;
}