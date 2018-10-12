import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import { Component } from "@angular/core";
import { Task, emptyTask } from "../../models/task.model";
import * as fromActions from '../../store/actions';
import * as fromStore from '../../store';

@Component({
  styleUrls: ['./task-list.component.css'],
  template: `
    <h2>Tehtävälista</h2>
    <div *ngIf="!((tasks$ | async).length)">
      Ei tehtäviä tehtävälistalla
    </div>
    <task *ngFor="let task of tasks$ | async; let odd = odd; let even = even;"
      [ngClass]="{ odd: odd, even: even }"
      [task]="task"
      (remove)="removeTask($event)"
      [routerLink]="['/tasks', task.id]"></task>
    <task-form class="task-list__form"
      [task]="newTask"
      (submit)="addTask()"></task-form>
  `
})

export class TaskListComponent {
  private tasks$: Observable<Task[]>;
  public newTask: Task = emptyTask();

  constructor(private store: Store<fromStore.State>, private router: Router) {
    this.tasks$ = this.store.pipe(select(fromStore.getTasks));
    this.store.dispatch(new fromActions.ListTasks());
  }

  addTask(): void {
    this.store.dispatch(new fromActions.CreateTask({ ...this.newTask }));
    this.newTask = emptyTask();
  }

  removeTask(id): void {
    this.store.dispatch(new fromActions.RemoveTask(id));
  }
}