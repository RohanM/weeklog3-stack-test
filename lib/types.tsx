export interface NewPost {
  author: string,
  message: string,
}

export interface Post extends NewPost {
  id: number,
}
