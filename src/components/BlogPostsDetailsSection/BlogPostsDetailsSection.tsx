import {useLoaderData, useLocation} from "react-router-dom";
import {Comment, Post} from "../../server-actions/BlogPostsTypes";
import {BlogPostsCard} from "../BlogPostsCard/BlogPostsCard";
import {getAuthorNameByEmail, getAuthorNameById} from "../../logic/UserHelper";
import {useContext, useEffect} from "react";
import {BlogPostContext} from "../../context/BlogPostContext";
import {BlogPostsActions} from "../BlogPostsActions/BlogPostsActions";
import "./BlogPostsDetailsSectionStyles.css"

export interface BlogPostsDetailsSectionLoaderData {
    post: Post | undefined
    comments: Comment[]
}

export const BlogPostsDetailsSection = (): JSX.Element => {

    const {users} = useContext(BlogPostContext)

    const {post, comments} = useLoaderData() as BlogPostsDetailsSectionLoaderData

    const location = useLocation()

    // Navigating to another site keeps the position of the previous site; i.e. if you scroll 300px on site A then by default site B scrolls 300px.
    // To prevent this behaviour we use the effect below. It sets the scroll position to the top.
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return <div className={"blog-post-section"}>
        {!post &&
            <div>
                <h3>
                    The post you try to view does not exist. Please return to the homepage.
                </h3>
            </div>
        }
        {post &&
            <>
                <BlogPostsCard
                    title={post.title}
                    body={post.body}
                    writtenByText={"Posted by " + getAuthorNameById(post.userId, users)}
                    footer={<BlogPostsActions
                        postId={post.id}
                        hideCommentsButton={true}
                    />}
                />
                <h2 className={"details-comment-heading"}>Comments</h2>
                {comments.map((comment) => {
                    return <BlogPostsCard
                        key={"comment-" + comment.id}
                        title={comment.name}
                        body={comment.body}
                        writtenByText={"Commented by " + getAuthorNameByEmail(comment.email, users)}
                    />
                })}
            </>
        }
    </div>
}