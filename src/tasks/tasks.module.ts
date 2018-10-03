import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
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
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [],
  exports: []
})

export class TasksModule {}