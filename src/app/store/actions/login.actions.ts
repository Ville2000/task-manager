import { Action } from '@ngrx/store';

import { LoginCredentials } from '../../models/login.model';
import { User } from '../../models/user.model';

export enum LoginActionTypes {
    LOGIN = "[Login Form] Login",
    LOGIN_SUCCESS = "[Login Form] Login Success",
    LOGIN_FAIL = "[Login Form] Login Fail"
}

export class Login implements Action {
    readonly type = LoginActionTypes.LOGIN;
    constructor(public payload: LoginCredentials) {}
}

export class LoginSuccess implements Action {
    readonly type = LoginActionTypes.LOGIN_SUCCESS;
    constructor(public payload: User) {}
}

export class LoginFail implements Action {
    readonly type = LoginActionTypes.LOGIN_FAIL;
}

export type LoginActionUnion =
    | Login
    | LoginSuccess
    | LoginFail