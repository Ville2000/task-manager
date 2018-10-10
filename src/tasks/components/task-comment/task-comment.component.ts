import { Component, Input } from "@angular/core";
import { Comment } from "../../models/comment.model";

@Component({
    selector: 'task-comment',
    styleUrls: [],
    template: `
        <p>{{ comment.comment }}</p>
        <div>{{ comment.likes }}</div>
    `
})

export class TaskCommentComponent {
    @Input() comment: Comment;
}