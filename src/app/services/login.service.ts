import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { LoginCredentials } from "../models/login.model";
import { Observable, of } from "rxjs";

@Injectable()
export class LoginService {
    constructor() {}

    login(loginCredentials: LoginCredentials): Observable<User> {
        const username: string =
            loginCredentials.username && loginCredentials.username !== ""
            ? loginCredentials.username
            : "DefaultUser"

        return of({ username });
    }
}