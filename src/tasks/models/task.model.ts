import { Comment } from './comment.model';

export interface Task {
  id?: number;
  name: string;
  done: boolean;
  date: Date;
  creator: string;
  comments: number[];
}

export const emptyTask = () => {
  return {
    name: null,
    done: false,
    date: new Date(),
    creator: null,
    comments: []
  };
}