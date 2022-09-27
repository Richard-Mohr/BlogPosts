import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {BlogPostsAllPostsSection} from "../../BlogPostsAllPostsSection/BlogPostsAllPostsSection";
import {fetchComments, fetchSinglePost} from "../../../server-actions/BlogPostsServerActions";
import {BlogPostsEditSection} from "../../BlogPostsEditAndCreateSection/BlogPostsEditSection";
import {COMMENTS, CREATE, EDIT, HOMEPAGE, SEARCH} from "../../../server-actions/BlogPostsServerRoutes";
import {
    BlogPostsDetailsSection,
    BlogPostsDetailsSectionLoaderData
} from "../../BlogPostsDetailsSection/BlogPostsDetailsSection";
import {BlogPostsCreateSection} from "../../BlogPostsEditAndCreateSection/BlogPostsCreateSection";
import {BlogPostsMainPage} from "../../BlogPostsMainPage/BlogPostsMainPage";

export const BlogPostsRouter = (): JSX.Element => {

    const router = createBrowserRouter([
        {
            path: HOMEPAGE,
            element: <BlogPostsMainPage>
                <BlogPostsAllPostsSection/>
            </BlogPostsMainPage>
        },
        {
            path: SEARCH + ":searchTerm",
            element: <BlogPostsMainPage>
                <BlogPostsAllPostsSection/>
            </BlogPostsMainPage>
        },
        {
            path: COMMENTS + ":postId",
            element: <BlogPostsMainPage>
                <BlogPostsDetailsSection/>
            </BlogPostsMainPage>,
            loader: ({params}) => {
                return Promise.all([
                    fetchSinglePost(params.postId ?? ""),
                    fetchComments(params.postId ?? "")
                ])
                    .then((values) => {
                        return {post: values[0], comments: values[1]} as BlogPostsDetailsSectionLoaderData
                    })
            }
        },
        {
            path: EDIT + ":postId",
            element: <BlogPostsMainPage>
                <BlogPostsEditSection/>
            </BlogPostsMainPage>,
            loader: ({params}) => {
                return fetchSinglePost(params.postId ?? "")
            }
        },
        {
            path: CREATE,
            element: <BlogPostsMainPage>
                <BlogPostsCreateSection/>
            </BlogPostsMainPage>,
        }
    ]);

    return <RouterProvider router={router}/>
}