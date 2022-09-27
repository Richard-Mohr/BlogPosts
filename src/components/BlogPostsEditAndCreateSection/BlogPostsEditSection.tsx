import "./BlogPostsEditSectionStyles.css"
import {BlogPostsEditControl} from "./BlogPostsEditControl";
import {Post} from "../../server-actions/BlogPostsTypes";
import {Link, useLoaderData} from "react-router-dom";
import {HOMEPAGE} from "../../server-actions/BlogPostsServerRoutes";
import {updateSinglePost} from "../../server-actions/BlogPostsServerActions";
import {useContext} from "react";
import {BlogPostContext} from "../../context/BlogPostContext";

export const BlogPostsEditSection = (): JSX.Element => {

    const {editPost} = useContext(BlogPostContext)

    // Post can be undefined if the edit post URL is invoked with an ID that does not exist on the server.
    const post: Post | undefined = useLoaderData() as Post | undefined

    const onSubmit = (newTitle: string, newBody: string) => {
        if(post === undefined) {
            return
        }
        updateSinglePost({
            id: post.id,
            userId: post.id,
            title: newTitle.trim(),
            body: newBody.trim()
        }).then(updatedPost => {
            editPost(updatedPost)
        })
    }

    return <div className={"edit-section-wrapper"}>
        {post === undefined &&
            <>
                <h2>The post you try to edit does not exist. Please return back to the homepage and edit another post.</h2>
                <div>
                    <Link to={HOMEPAGE} className={"edit-section-button"}>Go to homepage</Link>
                </div>
            </>
        }
        {post !== undefined &&
            <>
                <h3 className={"edit-section-heading"}>Edit post</h3>
                <BlogPostsEditControl
                    onSubmit={onSubmit}
                    title={post?.title ?? ""}
                    body={post?.body ?? ""}
                />
            </>
        }
    </div>
}