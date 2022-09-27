import "./BlogPostsEditSectionStyles.css"
import {BlogPostsEditControl} from "./BlogPostsEditControl";
import {createSinglePost} from "../../server-actions/BlogPostsServerActions";
import {useContext} from "react";
import {BlogPostContext} from "../../context/BlogPostContext";
import {useNavigate} from "react-router-dom";
import {HOMEPAGE} from "../../server-actions/BlogPostsServerRoutes";

export const BlogPostsCreateSection = (): JSX.Element => {

    const {addPost} = useContext(BlogPostContext)

    const navigate = useNavigate()

    const onSubmit = (newTitle: string, newBody: string) => {
        // The user ID of the creator. Using 1 for demo purposes since I don't have a user login.
        const userId = 1
        createSinglePost(newTitle.trim(), newBody.trim(), userId).then((createdPost) => {
            addPost(createdPost)
            navigate(HOMEPAGE)
        })
    }

    return <div className={"edit-section-wrapper"}>
        <>
            <h3 className={"edit-section-heading"}>Create post</h3>
            <BlogPostsEditControl
                onSubmit={onSubmit}
                title={""}
                body={""}
            />
        </>
    </div>
}