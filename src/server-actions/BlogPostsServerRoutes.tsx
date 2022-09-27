// Internal server routes. Used for client side routing.

export const HOMEPAGE = "/"
export const COMMENTS = "/comments/"
export const EDIT = "/edit/"
export const CREATE = "/create"
export const SEARCH = "/?search="


// External server routes. Documentation can be found under https://jsonplaceholder.typicode.com/guide.
export const GET_ALL_POSTS = "https://jsonplaceholder.typicode.com/posts"
export const GET_SINGLE_POST = "https://jsonplaceholder.typicode.com/posts/"
export const UPDATE_SINGLE_POST = "https://jsonplaceholder.typicode.com/posts/"
export const CREATE_SINGLE_POST = "https://jsonplaceholder.typicode.com/posts"
export const DELETE_SINGLE_POST = "https://jsonplaceholder.typicode.com/posts/"

export const GET_COMMENTS_FOR_POST = "https://jsonplaceholder.typicode.com/comments?postId="