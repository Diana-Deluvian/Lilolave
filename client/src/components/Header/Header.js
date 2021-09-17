import React from 'react';
import { FaHeartbeat } from "react-icons/fa";
import { IconContext } from "react-icons";
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import SidebarRight from '../SidebarRight/SidebarRight';

import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <SidebarLeft />
            <div id="Lilolave">
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