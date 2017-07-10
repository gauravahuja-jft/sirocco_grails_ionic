export class User {
    id: number;
    firstName: String;
    lastName: String;
    username: String;
    posts?: { id: number }[];
    likedPosts?: { id: number }[];
}