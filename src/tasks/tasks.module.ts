import { SharedModule } from '../shared/shared.module'

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { reducer } from './store/reducers/task.reducer';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.TaskListComponent,
  },
  {
    path: ':taskId',
    component: fromContainers.TaskDetailsComponent
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('tasks', reducer)
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  providers: [],
  exports: []
})

export class TasksModule {}