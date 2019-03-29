import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, Login } from "src/app/store";

@Component({
    selector: 'login-form',
    template: `
    <form (submit)="login($event)">
        <div>
            <label>Username</label>
            <input type="text" name="username" [(ngModel)]="username">
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" [(ngModel)]="password">
        </div>
        <input type="submit" value="Login">
    </form>
    `
})

export class LoginFormComponent {
    public username: string;
    public password: string;

    constructor(
        private store: Store<AppState>
    ) {}

    login(event) {
        event.preventDefault();
        console.log('Login', this.username, this.password);
        this.store.dispatch(new Login({ username: this.username, password: this.password }));
    }
}