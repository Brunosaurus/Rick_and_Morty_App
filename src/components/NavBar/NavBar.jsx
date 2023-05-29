import SearchBar from "../SearchBar/SearchBar"
import style from './NavBar.module.css'

export default function NavBar(props) {

    return(
        <div className={style.navBar}>
            <SearchBar onSearch={(props.onSearch)} />
        </div>
    );
}