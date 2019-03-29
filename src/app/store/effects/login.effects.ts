import { Injectable } from "@angular/core";

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators'

import { Action } from '@ngrx/store';

import * as fromLoginActions from '../actions/login.actions';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginService } from "src/app/services/login.service";
import { User } from "src/app/models/user.model";

@Injectable()
export class LoginEffects {
    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(fromLoginActions.LoginActionTypes.LOGIN),
        mergeMap((action: fromLoginActions.Login) =>
            this.loginService.login(action.payload).pipe(
                map((user: User) => (new fromLoginActions.LoginSuccess({ username: user.username }))),
                catchError(() => of(new fromLoginActions.LoginFail()))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ) {}
}