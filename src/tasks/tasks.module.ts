import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { reducer } from './store/reducers/task.reducer';
import { TaskListComponent } from "./containers/task-list/task-list.component";
import { TaskDetailsComponent } from "./containers/task-details/task-details.component";
import { TaskComponent } from "./components/task/task.component";

const ROUTES: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: ':taskId',
    component: TaskDetailsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('tasks', reducer)
  ],
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    TaskComponent
  ],
  providers: [],
  exports: []
})

export class TasksModule {}