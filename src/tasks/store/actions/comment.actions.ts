import { Action } from "@ngrx/store";

import { Comment } from '../../models/comment.model';

export const CREATE_COMMENT = '[Comment] Create comment';
export const UPDATE_COMMENT = '[Comment] Update comment';
export const ALTER_COMMENT_SUCCESS = '[Comment] Alter comment success';
export const ALTER_COMMENT_FAIL = '[Comment] Alter comment fail';

export const LIST_COMMENTS = '[Comment] List comments';
export const LIST_COMMENTS_SUCCESS = '[Comment] List comments success';
export const LIST_COMMENTS_FAIL = '[Comment] List comments fail';

export class CreateComment implements Action {
    readonly type = CREATE_COMMENT;
    constructor(public payload: Comment) {}
}

export class UpdateComment implements Action {
    readonly type = UPDATE_COMMENT;
    constructor(public payload: Comment) {}
}

export class AlterCommentSuccess implements Action {
    readonly type = ALTER_COMMENT_SUCCESS;
    constructor(public payload: Comment) {}
}

export class AlterCommentFail implements Action {
    readonly type = ALTER_COMMENT_FAIL;
}

export class ListComments implements Action {
    readonly type = LIST_COMMENTS;
    constructor(public payload: number) {}
}

export class ListCommentsSuccess implements Action {
    readonly type = LIST_COMMENTS_SUCCESS;
    constructor(public payload: Comment[]) {}
}

export class ListCommentsFail implements Action {
    readonly type = LIST_COMMENTS_FAIL;
}

export type CommentActionsUnion =
    | CreateComment
    | UpdateComment
    | AlterCommentSuccess
    | AlterCommentFail
    | ListComments
    | ListCommentsSuccess
    | ListCommentsFail;