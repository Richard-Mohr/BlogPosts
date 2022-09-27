import {User} from "../server-actions/BlogPostsTypes";

export const getAuthorNameById = (userId: number, allUsers: User[]): string => {
    const user = allUsers.find(user => user.id === userId)
    if(user === undefined) {
        return "unknown user"
    }
    return user.name
}

export const getAuthorNameByEmail = (userEmail: string, allUsers: User[]): string => {
    const user = allUsers.find(user => user.email === userEmail)
    if(user === undefined) {
        return userEmail
    }
    return user.name
}