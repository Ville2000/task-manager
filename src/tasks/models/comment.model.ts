export interface Comment {
  id?: number;
  comment: string;
  date: number;
  likes: number;
  task: number;
}

export const emptyComment = (): Comment => {
  return {
    comment: null,
    date: new Date().getTime(),
    likes: 0,
    task: null
  };
}