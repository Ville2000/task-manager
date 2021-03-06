import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import { map } from "rxjs/operators";

@Injectable()
export class CommentService {
    private url: string = 'http://localhost:3000/api/comments'

    constructor(private http: HttpClient) {}

    createComment(comment: Comment): Observable<any> {
        return this.http.post(this.url, comment);
    }

    updateComment(comment: Comment): Observable<any> {
        return this.http.put(`${this.url}/${comment.id}`, comment);
    }

    listCommentsForTask(id: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.url).pipe(
            map((comments: Comment[]) => comments.filter((comment: Comment) => comment.task === id))
        );
    }
}