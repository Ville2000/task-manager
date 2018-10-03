import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../../models/task.model";

@Component({
  selector: 'task',
  template: `
    <div>
      <h2>{{ task.name }}</h2>
      <button (click)="remove.emit(task.id)">Remove</button>
    </div>
  `
})

export class TaskComponent {
  @Input() task: Task;
  @Output() remove: EventEmitter<number> = new EventEmitter();
}