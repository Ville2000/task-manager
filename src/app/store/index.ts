import { Injectable } from '@angular/core';
import { RouterStateSnapshot, Params } from '@angular/router';

import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';


export interface RouterState {
  url: string;
  queryParams: Params;
  params: Params
}

export interface State {
  routes: fromRouter.RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
  routes: fromRouter.routerReducer
}

@Injectable()
export class CustomRouteSerializer implements fromRouter.RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}