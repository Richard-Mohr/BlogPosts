import {useEffect, useState} from "react";
import "./BlogPostsSearchBarStyles.css"
import {HiOutlineSearch} from "react-icons/hi";
import {useLocation, useNavigate} from "react-router-dom";
import {HOMEPAGE, SEARCH} from "../../server-actions/BlogPostsServerRoutes";

export const BlogPostsSearchBar = (): JSX.Element => {

    const navigate = useNavigate()

    const location = useLocation()

    const [searchText, setSearchText] = useState<string>("")

    useEffect(() => {
        if(location.search === "") {
            setSearchText("")
        }
    }, [location])

    const onSubmitSearch = () => {
        if(searchText === "") {
            navigate(HOMEPAGE)
            return
        }
        navigate(SEARCH + searchText.trim())
    }

    return <div className={"search-bar-wrapper"}>
        <input
            className={"search-bar-text-field"}
            type={"search"}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder={"Search for post title or description..."}
            onKeyPress={(event) => {
                if(event.key === "Enter") {
                    onSubmitSearch()
                }
            }}
            maxLength={300}
        />
        <button className={"search-submit-button"} onClick={onSubmitSearch}>
            <HiOutlineSearch size={20}/>
        </button>
    </div>
}