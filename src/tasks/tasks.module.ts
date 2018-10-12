import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module'

import { EffectsModule } from '@ngrx/effects';

import * as fromStore from './store';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromGuards from './guards';

const ROUTES: Routes = [
  {
    path: '',
    // TODO: Guardi, joka estää listan lataamisen yhä uudelleen
    component: fromContainers.TaskListComponent,
  },
  {
    path: ':taskId',
    component: fromContainers.TaskDetailsComponent,
    canActivate: [fromGuards.TaskGuard]
  }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('tasks', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects)
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  providers: [
    ...fromServices.services,
    ...fromGuards.guards
  ],
  exports: []
})

export class TasksModule {}