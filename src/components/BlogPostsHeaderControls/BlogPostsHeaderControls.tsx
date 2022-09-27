import {useNavigate} from "react-router-dom";
import {CREATE} from "../../server-actions/BlogPostsServerRoutes";
import {useContext} from "react";
import {ThemeContext, Themes} from "../../context/ThemeContext";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import "./BlogPostsHeaderControlsStyles.css"
import {HiPlus} from "react-icons/hi";

export const BlogPostsHeaderControls = (): JSX.Element => {

    const {theme, changeTheme} = useContext(ThemeContext)

    const navigate = useNavigate()

    const onCreate = () => {
        navigate(CREATE)
    }

    const onChangeTheme = () => {
        changeTheme(theme === Themes.light ? Themes.dark : Themes.light)
    }

    return <div className={"header-controls-wrapper"}>
        <button
            className={"header-control"}
            onClick={onCreate}
            title={"Create new post"}
        >
            <HiPlus size={"1.5em"}/>
        </button>
        <button
            className={"header-control"}
            onClick={onChangeTheme}
            title={"Change to " + (theme === Themes.light ? "dark mode" : "light mode")}
        >
            {theme === Themes.light &&
                <BsFillSunFill size={"1.5em"}/>
            }
            {theme === Themes.dark &&
                <BsFillMoonFill size={"1.5em"}/>
            }
        </button>
    </div>
}