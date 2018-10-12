import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { TasksModule } from '../tasks/tasks.module';
import { TaskState, reducer } from '../tasks/store/reducers/task.reducer';
import * as fromContainers from './containers';
import * as fromComponents from './components';

import { CustomRouteSerializer } from './router-state';


export interface AppState {
  tasks: TaskState;
  router: RouterReducerState
}

const reducers: ActionReducerMap<AppState> = {
  tasks: reducer,
  router: routerReducer
}

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks'
  },
  {
    path: 'tasks',
    loadChildren: () => TasksModule
  },
  {
    path: '**', component: fromContainers.FourOhFourComponent
  }
]

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
