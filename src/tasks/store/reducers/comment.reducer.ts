import { Comment } from '../../models/comment.model';
import * as fromActions from '../actions/comment.actions';

export interface CommentState {
    comments: Comment[]
}

export const initialState: CommentState = {
    comments: []
}

export function reducer(
    state: CommentState = initialState,
    action: fromActions.CommentActionsUnion): CommentState {
    switch(action.type) {
        case fromActions.ALTER_COMMENT_SUCCESS: {
            // const comment = action.payload;
            return state;
        }

        case fromActions.ALTER_COMMENT_FAIL: {
            return state;
        }

        default: {
            return state;
        }
    }
}