import "../BlogPostsCard/BlogPostsCardStyles.css"
import {useNavigate} from "react-router-dom";
import {CREATE} from "../../server-actions/BlogPostsServerRoutes";
import "./BlogPostsQuickCreateStyles.css"

export const BlogPostsQuickCreate = (): JSX.Element => {

    const navigate = useNavigate()

    const navigateToCreatePage = () => {
        navigate(CREATE)
    }

    return <div className={"post-card"}>
        <textarea
            className={"quick-create-control"}
            onClick={navigateToCreatePage}
            onChange={navigateToCreatePage}
            placeholder={"Create Post"}
            rows={1}
        />
    </div>
}