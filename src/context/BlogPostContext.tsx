import {createContext} from "react";
import {Post, User} from "../server-actions/BlogPostsTypes";

export enum BlogPostContextSortType {
    NEWEST_FIRST = "NEWEST_FIRST",
    TITLE_ASCENDING = "TITLE_ASCENDING",
    TITLE_DESCENDING = "TITLE_DESCENDING",
    USER_ASCENDING = "USER_ASCENDING",
    USER_DESCENDING = "USER_DESCENDING"
}

interface BlogPostContextInterface {
    allPosts: Post[],

    users: User[],

    searchString: string,
    setSearchString: (newSearchString: string) => void

    sortType: BlogPostContextSortType
    setSortType: (newSortType: BlogPostContextSortType) => void

    compactView: boolean
    setCompactView: (showCompactView: boolean) => void

    // Used to add/edit/remove fetched posts and updated the list of posts on the homepage.
    // This could be replaced by a fetchAllPosts after each operation but the API used in this project does not persist any changes.
    addPost: (post: Post) => void
    editPost: (post: Post) => void
    removePost: (postID: number) => void
}

export const BlogPostContext = createContext<BlogPostContextInterface>({
    allPosts: [],

    users: [],

    searchString: "",
    setSearchString: () => {},

    sortType: BlogPostContextSortType.NEWEST_FIRST,
    setSortType: () => {},

    compactView: false,
    setCompactView: () => {},

    addPost: () => {},
    editPost: () => {},
    removePost: () => {}
})