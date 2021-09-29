import React from 'react';
import { FaHeartbeat } from "react-icons/fa";
import { IconContext } from "react-icons";
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import SidebarRight from '../SidebarRight/SidebarRight';
import { useHistory } from "react-router-dom";

import './Header.css';


const Header = ({ setFilter }) => {
    let history = useHistory();
    return (
        <div className='header'>
            <SidebarLeft setFilter={setFilter} />
            <div id="Lilolave" onClick={() => history.push(`/`)}>
            <IconContext.Provider value={{ style: {marginRight: '0.5rem'}}} >
            <FaHeartbeat />
            </IconContext.Provider>
            <span>Lilolave</span>
            </div>
            <SidebarRight />
       </div>
    )
}

export default Header;