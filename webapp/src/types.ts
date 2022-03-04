type Index = `${number}` | `/${number}`
export interface Graph{
  [key: Index]: Node
}
export interface Node{
  post: Post
  children: Graph
}
export interface Post {
  index: bigint
  contents: Content[];
  author: string;
  date: Date;
  revisions: Graph
}

export type Content =
  | TextContent
  | URLContent
  | MentionContent
  | ReferenceContent
  | CodeContent

export interface TextContent {
  text: string;
};
export interface URLContent {
  url: string;
};
export interface MentionContent {
  mention: string;
};
export interface ReferenceContent {
  reference:
    | PostReference
    | GroupReference
};
export interface GroupReference {
  group: string;
};
export interface PostReference {
  graph: string;
  group: string;
  index: string;
};

export interface CodeContent {
  code: string;
};