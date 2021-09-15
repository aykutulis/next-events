export interface Comment {
  email: string;
  name: string;
  text: string;
}

export interface CommentFromServer extends Comment {
  id: string;
}
