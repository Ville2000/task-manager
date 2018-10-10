import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import { TaskState, selectAllTasks } from '../../store/reducers/task.reducer';
import { Component } from "@angular/core";
import { Task, emptyTask } from "../../models/task.model";
import * as fromActions from '../../store/actions';

@Component({
  styleUrls: ['./task-list.component.css'],
  template: `
    <h2>Tehtävälista</h2>
    <div *ngIf="!((tasks$ | async).length)">
      Ei tehtäviä tehtävälistalla
    </div>
    <div *ngFor="let task of tasks$ | async; let odd = odd; let even = even;">
      <task class="task-list__task"
        [ngClass]="{ odd: odd, even: even }"
        [task]="task"
        (remove)="removeTask($event)"
        (click)="selectTask(task.id)"></task>
    </div>
    <task-form class="task-list__form"
      [task]="newTask"
      (submit)="addTask()"></task-form>
  `
})

export class TaskListComponent {
  private tasks$: Observable<Task[]>;
  public newTask: Task = emptyTask();

  constructor(private store: Store<TaskState>, private router: Router) {
    this.tasks$ = this.store.pipe(select(selectAllTasks));
    this.store.dispatch(new fromActions.LoadTasks());
  }

  addTask(): void {
    this.store.dispatch(new fromActions.AddTask({ ...this.newTask }));
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