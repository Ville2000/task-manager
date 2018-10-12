import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from '../../models/task.model';

@Component({
    selector: 'task-form',
    styleUrls: ['./task-form.component.css'],
    template: `
        <label for="task-name">Uusi tehtävä</label>
        <input type="text" name="task-name" [(ngModel)]="task.name"/>
        <button type="normal" (click)="submit.emit()">Lisää</button>
    `
})
export class TaskFormComponent {
    @Input() task: Task;
    @Output() submit: EventEmitter<any> = new EventEmitter();
}