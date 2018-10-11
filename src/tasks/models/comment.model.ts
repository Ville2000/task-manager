export interface Comment {
  id?: number;
  comment: string;
  date: Date;
  likes: number;
  task: number;
}

export const emptyComment = (): Comment => {
  return {
    comment: null,
    date: new Date(),
    likes: 0,
    task: null
  };
}