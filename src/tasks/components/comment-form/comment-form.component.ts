import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Comment } from "../../models/comment.model";

@Component({
    selector: 'comment-form',
    styleUrls: ['./comment-form.component.css'],
    template: `
        <textarea name="comment-form--comment" placeholder="Kommentoi" [(ngModel)]="comment.comment"></textarea>
        <button type="normal" (click)="submit.emit()">Kommentoi</button>
    `
})

export class CommentFormComponent {
    @Input() comment: Comment;
    @Output() submit: EventEmitter<any> = new EventEmitter();
}