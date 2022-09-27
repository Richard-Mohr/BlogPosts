import {Post, User} from "../server-actions/BlogPostsTypes";
import {BlogPostContextSortType} from "../context/BlogPostContext";
import {getAuthorNameById} from "./UserHelper";

export const sortAndFilterBlogPosts = (allPosts: Post[], filter: string, sortType: BlogPostContextSortType, users: User[]) => {
    const filterText = filter.toLocaleLowerCase()
    let filteredPosts = allPosts
    if(filterText !== "") {
        filteredPosts = allPosts.filter(post => {
            return post.title.toLocaleLowerCase().includes(filterText) ||
                post.body.toLocaleLowerCase().includes(filterText)
        })
    }
    let filteredAndSortedPosts = filteredPosts
    filteredAndSortedPosts.sort((a, b) => {
        let userA, userB
        switch (sortType) {
            case BlogPostContextSortType.TITLE_ASCENDING:
                return a.title.localeCompare(b.title)

            case BlogPostContextSortType.TITLE_DESCENDING:
                return b.title.localeCompare(a.title)

            case BlogPostContextSortType.USER_ASCENDING:
                userA = getAuthorNameById(a.userId, users)
                userB = getAuthorNameById(b.userId, users)
                return userA.localeCompare(userB)

            case BlogPostContextSortType.USER_DESCENDING:
                userA = getAuthorNameById(a.userId, users)
                userB = getAuthorNameById(b.userId, users)
                return userB.localeCompare(userA)

            case BlogPostContextSortType.NEWEST_FIRST:
            default:
                return b.id - a.id
        }
    })
    return filteredAndSortedPosts
}