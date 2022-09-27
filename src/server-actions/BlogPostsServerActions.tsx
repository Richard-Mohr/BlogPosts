import {Comment, Post, User} from "./BlogPostsTypes";
import {
    CREATE_SINGLE_POST,
    DELETE_SINGLE_POST,
    GET_ALL_POSTS, GET_COMMENTS_FOR_POST,
    GET_SINGLE_POST,
    UPDATE_SINGLE_POST
} from "./BlogPostsServerRoutes";

// Server calls for posts.

export const fetchAllPosts = async (): Promise<Post[]> => {
    return fetch(GET_ALL_POSTS)
        .then((response) => response.json())
        .catch(() => alert("Something went wrong. Please try again later."))
}

export const fetchSinglePost = async (postId: string): Promise<Post | undefined> => {
    if (postId === "") {
        return undefined
    }
    return fetch(GET_SINGLE_POST + postId)
        .then((response) => response.json())
        .then((fetchedPost) => {
            //check if fetchedPost is an empty object; i.e. it doesn't exist on the server.
            if (Object.keys(fetchedPost).length === 0) {
                return undefined
            }
            return fetchedPost
        })
        .catch(() => alert("Something went wrong. Please try again later."))
}

export const updateSinglePost = async (post: Post): Promise<Post> => {
    return fetch(UPDATE_SINGLE_POST + post.id, {
        method: 'PUT',
        body: JSON.stringify({
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((updatedPost) => {
            return updatedPost
        })
        .catch(() => alert("Something went wrong. Please try again later."))
}

export const createSinglePost = async (title: string, body: string, userId: number): Promise<Post> => {
    return fetch(CREATE_SINGLE_POST, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((createdPost) => {
            return createdPost
        })
        .catch(() => alert("Something went wrong. Please try again later."))
}

export const deleteSinglePost = (postId: string): Promise<any> => {
    return fetch(DELETE_SINGLE_POST + postId, {
        method: "DELETE",
    }).catch(() => alert("Something went wrong. Please try again later."));
}


// Server calls for comments.

export const fetchComments = async (postId: string): Promise<Comment[]> => {
    return fetch(GET_COMMENTS_FOR_POST + postId, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((createdPost) => {
            return createdPost
        })
        .catch(() => alert("Something went wrong. Please try again later."));
}

// Server calls for users.

export const fetchAllUsers = async (): Promise<User[]> => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((fetchedUsers) => {
            return fetchedUsers
        })
        .catch(() => alert("Something went wrong. Please try again later."));
}