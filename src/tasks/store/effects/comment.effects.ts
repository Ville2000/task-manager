import { Injectable } from "@angular/core";

import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, filter } from "rxjs/operators";

import * as fromActions from '../actions';
import { CommentService } from "src/tasks/services/comment.service";

import { Comment } from '../../models/comment.model';

@Injectable()
export class CommentEffects {
    
    @Effect()
    createComment$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.CREATE_COMMENT),
        mergeMap((action: fromActions.CreateComment) =>
            this.commentService.createComment(action.payload).pipe(
                map((comment: Comment) => (new fromActions.AlterCommentSuccess(comment))),
                catchError(() => of(new fromActions.AlterCommentFail()))
            )
        )
    );

    @Effect()
    updateComment$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.UPDATE_COMMENT),
        mergeMap((action: fromActions.UpdateComment) =>
            this.commentService.updateComment(action.payload).pipe(
                map((comment: Comment) => (new fromActions.AlterCommentSuccess(comment))),
                catchError(() => of(new fromActions.AlterCommentFail()))
            )
        )
    );

    @Effect()
    listCommentsForTask$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.LIST_COMMENTS),
        mergeMap((action: fromActions.ListComments) =>
            this.commentService.listCommentsForTask(action.payload).pipe(
                map((comments: Comment[]) => (new fromActions.ListCommentsSuccess(comments))),
                catchError(() => of(new fromActions.ListCommentsFail()))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private commentService: CommentService) {}
}