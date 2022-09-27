import React, {useEffect, useState} from "react";
import {BlogPostContext, BlogPostContextSortType} from "../../../context/BlogPostContext";
import {Post, User} from "../../../server-actions/BlogPostsTypes";
import {fetchAllPosts, fetchAllUsers} from "../../../server-actions/BlogPostsServerActions";

interface BlogPostsContextWrapperProps {
    children?: React.ReactNode
}

export const BlogPostsContextWrapper = (props: BlogPostsContextWrapperProps): JSX.Element => {

    const [allPosts, setAllPosts] = useState<Post[]>([])

    const [users, setUsers] = useState<User[]>([])
    
    const [filterText, setFilterText] = useState<string>("")
    const [sortType, setSortType] = useState<BlogPostContextSortType>(BlogPostContextSortType.NEWEST_FIRST)

    const [compactView, setCompactView] = useState<boolean>(false)

    useEffect(() => {
        fetchAllPosts().then(fetchedPosts => {
            setAllPosts(fetchedPosts)
        })
    }, [])
    
    useEffect(() => {
        fetchAllUsers().then(fetchedUsers => {
            setUsers(fetchedUsers)
        })
    }, [])

    const addPost = (post: Post) => {
        const updatedPosts = allPosts.slice()
        updatedPosts.push(post)
        setAllPosts(updatedPosts)
    }

    const editPost = (post: Post) => {
        const updatedPosts = allPosts.map(value => {
            if(value.id !== post.id) {
                return value
            }
            return post
        })
        setAllPosts(updatedPosts)
    }

    const removePost = (postId: number) => {
        const updatedPosts = allPosts.filter(value => value.id !== postId)
        setAllPosts(updatedPosts)
    }

    return <BlogPostContext.Provider value={{
        allPosts: allPosts,

        users: users,

        searchString: filterText,
        setSearchString: setFilterText,

        sortType: sortType,
        setSortType: setSortType,

        compactView: compactView,
        setCompactView: setCompactView,

        addPost: addPost,
        removePost: removePost,
        editPost: editPost
    }}>
        {props.children}
    </BlogPostContext.Provider>
}