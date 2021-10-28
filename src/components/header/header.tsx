import './header.css'
import {openSidebar} from "../sidebar/sidebar";

/**
 * Заголовок страницы отображается только для мобильной версии
 * @constructor
 */
const Header = () => {
    return (
        <div className="header">
            <div className="fa fa-bars" onClick={openSidebar}></div>
            <h1>My Photo Gallery</h1>
        </div>
    );
}

export default Header;