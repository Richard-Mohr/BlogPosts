import "./BlogPostsCardStyles.css"

interface BlogPostsCardProps {
    writtenByText: string
    title: string
    body: string
    id?: string
    compactView?: boolean
    footer?: JSX.Element
}

export const BlogPostsCard = (props: BlogPostsCardProps): JSX.Element => {

    return <div id={props.id} className={"post-card" + (props.compactView ? " compact" : "")}>
        <div className={"post-card-title"}>
            <h3>
                {props.title}
            </h3>
            {!props.compactView &&
                <p className={"post-card-author"}>
                    {props.writtenByText}
                </p>
            }
        </div>
        {!props.compactView &&
            <p className={"post-card-body"}>
                {props.body}
            </p>
        }
        {props.footer}
    </div>
}