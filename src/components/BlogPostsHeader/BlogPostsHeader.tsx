import { BlogPostsSearchBar } from "../BlogPostsSearchBar/BlogPostsSearchBar"
import "./BlogPostsHeaderStyles.css"
import {BlogPostsLogo} from "../BlogPostsLogo/BlogPostsLogo";
import {BlogPostsHeaderControls} from "../BlogPostsHeaderControls/BlogPostsHeaderControls";

export const BlogPostsHeader = (): JSX.Element => {
    return <div className={"header-wrapper"}>
        <BlogPostsLogo/>
        <div className={"header-content"}>
            <BlogPostsSearchBar/>
        </div>
        <BlogPostsHeaderControls/>
    </div>
}