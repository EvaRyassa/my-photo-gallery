import './sidebar.css';
import { Link } from "react-router-dom"
import {filterType} from "../../types/common.type";

export const openSidebar = () =>{
    (document.querySelector('.sidebar') as HTMLDivElement).classList.add('sidebar-open');
}

export const sidebarClose = () => {
    (document.querySelector('.sidebar') as HTMLDivElement).classList.remove('sidebar-open');
    return true;
}
const activeLink = (key:filterType) => {
    let pathName = document.location.pathname;
    pathName = pathName.slice(1);
    return pathName === key;

}

interface menuItem {
    name: string
    key: filterType
}

const Sidebar = (props: any) => {
    const menu: menuItem[] = [
        {name: "All pictures", key: ''},
        {name: "Nature", key: 'nature'},
        {name: "Animals", key: 'animal'},
        {name: "Auto", key: 'auto'},
        {name: "Architecture", key: 'architecture'},
    ];
    const {onClickFilter} = props;
    const menuBtns = menu.map(({name, key}, i) => {
        return (
            <Link key={key} to={`/${key}`}>
                <li className={activeLink(key) ? 'active' : ''} onClick={()=> onClickFilter(key) && sidebarClose() }>
                    {name}
                </li>
            </Link>
        )
    });

    return (
      <div className="sidebar">
          <div className="fa fa-close" onClick={sidebarClose}></div>
          <div className='sidebar-logo'>
                My Photo Gallery
          </div>
          <ul>
              {menuBtns}
          </ul>

      </div>
    );
}

export default Sidebar;