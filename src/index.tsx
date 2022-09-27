import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import reportWebVitals from './reportWebVitals';
import {ThemeContextWrapper} from "./components/provider/ThemeContextWrapper/ThemeContextWrapper";
import {BlogPostsContextWrapper} from "./components/provider/BlogPostsContextWrapper/BlogPostsContextWrapper";
import {BlogPostsRouter} from "./components/provider/BlogPostsRouter/BlogPostsRouter";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeContextWrapper>
        <BlogPostsContextWrapper>
            <React.StrictMode>
                <BlogPostsRouter/>
            </React.StrictMode>
        </BlogPostsContextWrapper>
    </ThemeContextWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
