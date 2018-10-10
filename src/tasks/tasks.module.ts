import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module'

import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './store/effects/task.effects';

import { reducer } from './store/reducers/task.reducer';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

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
    StoreModule.forFeature('tasks', reducer),
    EffectsModule.forFeature([ TaskEffects ])
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  providers: [
    ...fromServices.services
  ],
  exports: []
})

export class TasksModule {}