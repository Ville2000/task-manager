import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";
import { Task } from "../../models/task.model";

@Component({
  template: `
    <h1>Task list works!</h1>
    <div *ngFor="let task of tasks">
      <task [task]="task"></task>
    </div>
  `
})

export class TaskListComponent {
  private tasks: Task[];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/tasks')
      .subscribe((tasks: Task[]) => {
        console.log('tasks', tasks);
        this.tasks = tasks;
      })
  }
}