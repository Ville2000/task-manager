import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { TasksModule } from '../tasks/tasks.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromStore from './store';


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

// TODO: Meta-reducers
@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(fromStore.reducers),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: fromStore.CustomRouteSerializer
    }
  ],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
