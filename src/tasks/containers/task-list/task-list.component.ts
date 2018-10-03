import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import { TaskState, selectAllTasks } from '../../store/reducers/task.reducer';
import { Component } from "@angular/core";
import { Task, emptyTask } from "../../models/task.model";
import * as fromActions from '../../store/actions';

@Component({
  template: `
    <h1>Tehtävälista</h1>
    <div *ngIf="!((tasks$ | async).length)">
      Ei tehtäviä tehtävälistalla
    </div>
    <div *ngFor="let task of tasks$ | async">
      <task (click)="selectTask(task.id)"
        [task]="task"
        (remove)="removeTask($event)"></task>
    </div>
    <task-form
      [task]="newTask"
      (submitTask)="addTask($event)"></task-form>
  `
})

export class TaskListComponent {
  private tasks$: Observable<Task[]>;
  public newTask: Task = emptyTask();

  constructor(private store: Store<TaskState>, private router: Router) {
    this.tasks$ = this.store.pipe(select(selectAllTasks));
  }

  addTask(task: Task): void {
    this.store.dispatch(new fromActions.AddTask({ ...task }));
    this.newTask = emptyTask();
  }

  removeTask(id: number): void {
    this.store.dispatch(new fromActions.RemoveTask(id));
  }

  selectTask(id: number): void {
    this.store.dispatch(new fromActions.SelectTask(id));
    this.router.navigate([`/tasks/${id}`]);
  }
}