import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from '../../models/task.model';

@Component({
    selector: 'task-form',
    template: `
    <form (ngSubmit)="submitTask.emit(task)">
        <label for="task-name">Tehtävä
        <input type="text" name="task-name" [(ngModel)]="task.name"/>
        </label>
        <button type="submit">Lisää</button>
    </form>
    `
})
export class TaskFormComponent {
    @Input() task: Task;
    @Output() submitTask: EventEmitter<Task> = new EventEmitter();
}