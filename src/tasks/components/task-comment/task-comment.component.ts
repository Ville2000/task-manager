import { Component, Input } from "@angular/core";
import { Comment } from "../../models/comment.model";

@Component({
    selector: 'task-comment',
    styleUrls: ['./task-comment.component.css'],
    template: `
        <div>{{ comment.comment }}</div>
        <div *ngIf="comment.likes > 0">+ {{ comment.likes }}</div>
        <div *ngIf="comment.likes === 0">0</div>
    `
})

export class TaskCommentComponent {
    @Input() comment: Comment;
}