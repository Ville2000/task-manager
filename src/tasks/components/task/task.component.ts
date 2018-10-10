import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../../models/task.model";

@Component({
  selector: 'task',
  styleUrls: ['./task.component.css'],
  template: `
    <div class="task__name">{{ task.name }}</div>
    <div class="task__comments">{{ task.comments.length }}</div>
    <button class="task__remove-btn" (click)="remove.emit(task.id)">x</button>
  `
})

export class TaskComponent {
  @Input() task: Task;
  @Output() remove: EventEmitter<number> = new EventEmitter();
}