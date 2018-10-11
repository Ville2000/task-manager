import * as fromActions from '../actions/comment.actions';
import { CommentActionsUnion } from '../actions/comment.actions';
import { Comment } from '../../models/comment.model';

export interface CommentState {
    comments: Comment[]
}

export const initialState: CommentState = {
    comments: []
}

export function reducer(
    state: CommentState = initialState,
    action: CommentActionsUnion
    ): CommentState {
    switch(action.type) {
        case fromActions.ALTER_COMMENT_SUCCESS: {
            const comment: Comment = action.payload;
            const comments = state.comments
                .filter(comment => comment.id !== action.payload.id)
                .concat(comment);
            return { ...state, comments};
        }

        case fromActions.ALTER_COMMENT_FAIL: {
            return state;
        }

        case fromActions.LIST_COMMENTS_SUCCESS: {
            const comments: Comment[] = action.payload;
            return { ...state, comments };
        }

        case fromActions.LIKE_COMMENT_SUCCESS: {
            return state;
        }

        case fromActions.LIKE_COMMENT_FAIL: {
            return state;
        }

        default: {
            return state;
        }
    }
}