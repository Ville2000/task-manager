import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import { TaskState, selectAllTasks } from '../../store/reducers/task.reducer';
import { Component } from "@angular/core";
import { Task } from "../../models/task.model";
import * as fromActions from '../../store/actions';

@Component({
  template: `
    <h1>Task list works!</h1>
    <div *ngFor="let task of tasks | async">
      <task (click)="selectTask(task.id)"
        [task]="task"
        (remove)=removeTask($event)></task>
    </div>
    <form (ngSubmit)="addTask()">
      <input type="text" name="task-name" [(ngModel)]="newTask.name"/>
      <button>Lisää tehtävä</button>
    </form>
  `
})

export class TaskListComponent {
  private tasks: Observable<Task[]>;
  private newTask: Task = {
    name: null,
    date: new Date(),
    comments: [],
    done: false,
    creator: "Ville"
  }

  constructor(private store: Store<TaskState>, private router: Router) {
    this.tasks = this.store.pipe(select(selectAllTasks));
  }

  addTask(): void {
    this.store.dispatch(new fromActions.AddTask({ ...this.newTask }));
  }

  removeTask(id: number): void {
    this.store.dispatch(new fromActions.RemoveTask(id));
  }

  selectTask(id: number): void {
    this.store.dispatch(new fromActions.SelectTask(id));
    this.router.navigate([`/tasks/${id}`]);
  }
}