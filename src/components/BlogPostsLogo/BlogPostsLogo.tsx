import "./BlogPostsLogoStyles.css"
import {useNavigate} from "react-router-dom";
import {HOMEPAGE} from "../../server-actions/BlogPostsServerRoutes";

export const BlogPostsLogo = ():JSX.Element  => {

    const navigate = useNavigate()

    const returnHome = () => {
        navigate(HOMEPAGE)
    }

    return <div className={"logo-wrapper"} onClick={returnHome} title={"Home"}>
        <span>B P</span>
    </div>
}