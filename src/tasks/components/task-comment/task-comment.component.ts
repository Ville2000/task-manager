import { Component, Input } from "@angular/core";
import { Comment } from "../../models/comment.model";

@Component({
    selector: 'task-comment',
    styleUrls: ['./task-comment.component.css'],
    template: `
        <div>{{ comment.comment }}</div>
        <div>{{ comment.likes }}</div>
    `
})

export class TaskCommentComponent {
    @Input() comment: Comment;
}