import "./BlogPostsMainPageStyles.css"
import {BlogPostsHeader} from "../BlogPostsHeader/BlogPostsHeader";
import React from "react";

interface BlogPostsMainPageProps {
    children?: React.ReactNode
}

export const BlogPostsMainPage = (props: BlogPostsMainPageProps) => {

    return <div className={"main-page-wrapper"}>
        <BlogPostsHeader />
        <div className={"main-page-content"}>
            {props.children}
        </div>
    </div>
}