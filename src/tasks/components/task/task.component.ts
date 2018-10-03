import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../../models/task.model";

@Component({
  selector: 'task',
  template: `
    <div>
      <div>{{ task.name }}</div>
      <div>{{ task.comments.length }}</div>
      <button (click)="remove.emit(task.id)">Poista</button>
    </div>
  `
})

export class TaskComponent {
  @Input() task: Task;
  @Output() remove: EventEmitter<number> = new EventEmitter();
}