import {useContext, useEffect, useState} from "react";
import {BlogPostContext} from "../../context/BlogPostContext";
import {BlogPostsCard} from "../BlogPostsCard/BlogPostsCard";
import "./BlogPostsSectionStyles.css"
import {getAuthorNameById} from "../../logic/UserHelper";
import {BlogPostsActions} from "../BlogPostsActions/BlogPostsActions";
import {BlogPostsQuickCreate} from "../BlogPostsQuickCreate/BlogPostsQuickCreate";
import {BlogPostsQuickActions} from "../BlogPostsQuickActions/BlogPostsQuickActions";
import {useSearchParams} from "react-router-dom";
import {sortAndFilterBlogPosts} from "../../logic/Sorting";

export const BlogPostsAllPostsSection = (): JSX.Element => {

    const {allPosts, users, compactView, setSearchString, searchString, sortType} = useContext(BlogPostContext)

    const [filteredAndSortedPosts, setFilteredAndSortedPosts] = useState(sortAndFilterBlogPosts(allPosts, searchString, sortType, users))

    useEffect(() => {
        setFilteredAndSortedPosts(sortAndFilterBlogPosts(allPosts, searchString, sortType, users))
    }, [allPosts, searchString, sortType, users])

    // Filter list based on URL. Use ?search= to set the filter via the URL.
    const [searchParam] = useSearchParams()
    useEffect(() => {
        setSearchString(searchParam.get("search") ?? "")
    }, [searchParam, setSearchString])

    return <div className={"blog-post-section"}>
        <BlogPostsQuickCreate/>
        <BlogPostsQuickActions/>
        {filteredAndSortedPosts.map((post) => {
            return <BlogPostsCard
                key={"blog-post-card-" + post.id}
                title={post.title}
                body={post.body}
                writtenByText={"Posted by " + getAuthorNameById(post.userId, users)}
                compactView={compactView}
                id={post.id.toString()}
                footer={<BlogPostsActions postId={post.id}/>}
            />
        })}
    </div>
}