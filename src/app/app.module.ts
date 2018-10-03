import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { TasksModule } from '../tasks/tasks.module';

import { AppComponent } from './containers/app/app.component';
import { FourOhFourComponent } from './containers/four-oh-four/four-oh-four.component';
import { TaskState, reducer } from '../tasks/store/reducers/task.reducer';

export interface AppState {
  tasks: TaskState;
}

const reducers: ActionReducerMap<AppState> = {
  tasks: reducer
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
    path: '**', component: FourOhFourComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
