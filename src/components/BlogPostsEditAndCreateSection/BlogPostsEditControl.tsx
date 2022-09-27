import {Link} from "react-router-dom";
import {useState} from "react";
import "./BlogPostsEditSectionStyles.css"
import {HOMEPAGE} from "../../server-actions/BlogPostsServerRoutes";

interface BlogPostsEditControlProps {
    title: string
    body: string
    onSubmit: (newTitle: string, newBody: string) => void
}

export const BlogPostsEditControl = (props: BlogPostsEditControlProps): JSX.Element => {

    const [title, setTitle] = useState<string>(props.title)
    const [body, setBody] = useState<string>(props.body)

    const [showInfo, setShowInfo] = useState<boolean>(false)

    const onSubmit = () => {
        if(body.trim() === "" || title.trim() === "") {
            setShowInfo(true)
            return
        }
        props.onSubmit(title.trim(), body.trim())
    }

    return <>
        {showInfo &&
            <div>
                Neither the title nor the body can be empty.
            </div>
        }
        <textarea
            className={"edit-section-title"}
            placeholder={"Title"}
            name={"title"}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            rows={1}
            maxLength={300}
        />
        <textarea
            className={"edit-section-body"}
            placeholder={"Text"}
            name={"body"}
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={10}
            maxLength={1000}
        />
        <div className={"edit-section-footer"}>
            <button
                className={"edit-section-button primary"}
                onClick={onSubmit}
            >
                Save Post
            </button>
            <Link to={HOMEPAGE} className={"edit-section-button"}>
                Cancel
            </Link>
        </div>
    </>
}