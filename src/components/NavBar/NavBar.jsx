import SearchBar from "../SearchBar/SearchBar"
import style from './NavBar.module.css'
import Logos from "./logos/logos"

export default function NavBar(props) {
    return(
        <div className={style.navBar}>
            <Logos/>
            <SearchBar onSearch={(props.onSearch)} logout={props.logout}/>
        </div>
    );
}