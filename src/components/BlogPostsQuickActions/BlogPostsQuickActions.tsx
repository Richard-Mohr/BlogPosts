import "../BlogPostsCard/BlogPostsCardStyles.css"
import {useContext} from "react";
import {BlogPostContext, BlogPostContextSortType} from "../../context/BlogPostContext";
import "./BlogPostsQuickActionsStyles.css"

const convertSortTypeToString = (sortType: BlogPostContextSortType): string => {
    switch (sortType) {
        case BlogPostContextSortType.NEWEST_FIRST:
            return "Newest first"
        case BlogPostContextSortType.TITLE_ASCENDING:
            return "Title ascending"
        case BlogPostContextSortType.TITLE_DESCENDING:
            return "Title descending"
        case BlogPostContextSortType.USER_ASCENDING:
            return "User ascending"
        case BlogPostContextSortType.USER_DESCENDING:
            return "User descending"
        default:
            return "Newest first"
    }
}

export const BlogPostsQuickActions = (): JSX.Element => {

    const {sortType, setSortType, compactView, setCompactView} = useContext(BlogPostContext)

    const getSortTypeOptions = ():JSX.Element[] => {
        const sortTypes: JSX.Element[] = []
        for(let type in BlogPostContextSortType) {
            if(isNaN(Number(type))) {
                sortTypes.push(<option key={type} value={type}>
                    {convertSortTypeToString(type as BlogPostContextSortType)}
                </option>)
            }
        }
        return sortTypes
    }

    const onChangeSortType = (newSortType: BlogPostContextSortType) => {
        setSortType(newSortType)
    }

    const onViewTypeChanged = () => {
        setCompactView(!compactView)
    }

    return <div className={"post-card"}>
        <div className={"sorting-control"}>
            <div>
                <label htmlFor={"sort-type"}>Sort by:</label>
                <select
                    name={"sort type"}
                    id={"sort-type"}
                    onChange={event => {
                        onChangeSortType(event.target.value as BlogPostContextSortType)
                    }}
                    defaultValue={sortType}
                >
                    {getSortTypeOptions()}
                </select>
            </div>
            <button
                className={"compact-view-toggle"}
                onClick={onViewTypeChanged}
                title={"Change view mode"}
            >
                <span>{compactView ? "Default view" : "Compact view"}</span>
            </button>
        </div>
    </div>
}