export interface Comment {
  id?: number;
  comment: string;
  date: Date;
  likes: number;
}

export const emptyComment = (): Comment => {
  return {
    comment: null,
    date: new Date(),
    likes: 0
  };
}