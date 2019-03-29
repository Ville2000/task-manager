import { LoginState } from "./login.reducer";

import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromRouter from '@ngrx/router-store';

import * as fromRouterReducer from './router.reducer';
import * as fromLoginReducer from './login.reducer';

export interface AppState {
    login: LoginState,
    router: fromRouter.RouterReducerState<fromRouterReducer.RouterState>;
}

export const reducers: ActionReducerMap<AppState> = {
    login: fromLoginReducer.reducer,
    router: fromRouter.routerReducer
}

export const getRouterState =
    createFeatureSelector<fromRouter.RouterReducerState<fromRouterReducer.RouterState>>('route');