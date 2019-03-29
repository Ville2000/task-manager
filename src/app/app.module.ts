import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { TasksModule } from '../tasks/tasks.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromStore from './store';
import { SharedModule } from 'src/shared/shared.module';


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
    path: 'login',
    component: fromContainers.LoginComponent
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
    SharedModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(fromStore.reducers),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
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
