import "./BlogPostsActionStyles.css"
import {GoComment, GoTrashcan} from "react-icons/go"
import {BsPencil} from "react-icons/bs"
import {useNavigate} from "react-router-dom";
import {COMMENTS, EDIT, HOMEPAGE} from "../../server-actions/BlogPostsServerRoutes";
import {deleteSinglePost} from "../../server-actions/BlogPostsServerActions";
import {useContext} from "react";
import {BlogPostContext} from "../../context/BlogPostContext";

interface BlogPostsActionsProps {
    postId: number
    hideCommentsButton?: boolean
}

export const BlogPostsActions = (props: BlogPostsActionsProps): JSX.Element => {

    const {removePost, compactView} = useContext(BlogPostContext)

    const navigate = useNavigate()

    const onViewPost = () => {
        navigate(COMMENTS + props.postId)
    }

    const onEditPost = () => {
        navigate(EDIT + props.postId)
    }

    const onDeletePost = () => {
        deleteSinglePost(props.postId.toString())
            .then(() => {
                removePost(props.postId)
                navigate(HOMEPAGE)
            })
    }

    return <div className={"posts-actions-wrapper"}>
        {!props.hideCommentsButton &&
            <button
                className={"posts-action-button"}
                title={"See comments"}
                onClick={onViewPost}
            >
                <GoComment className={"posts-action-icon"}/>
                {!compactView &&
                    <span>Comments</span>
                }
            </button>
        }
        <button
            className={"posts-action-button"}
            title={"Edit post"}
            onClick={onEditPost}
        >
            <BsPencil className={"posts-action-icon"}/>
            {!compactView &&
                <span>Edit</span>
            }
        </button>
        <button
            className={"posts-action-button"}
            title={"Delete post"}
            onClick={onDeletePost}
        >
            <GoTrashcan className={"posts-action-icon"}/>
            {!compactView &&
                <span>Delete</span>
            }
        </button >
    </div>
}