import { Component, Input } from "@angular/core";
import { Task } from "../../models/task.model";

@Component({
  selector: 'task',
  template: `
    <h2>{{ task.name }}</h2>
  `
})

export class TaskComponent {
  @Input() task: Task;
}