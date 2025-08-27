export interface IPost {
   _id: string;
   title: string;
   content: string;
   author: { name: string; picture: string };
   createdAt: string;
}
