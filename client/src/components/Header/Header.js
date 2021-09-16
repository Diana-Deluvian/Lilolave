import React from 'react';
import { FaHeartbeat } from "react-icons/fa";
import { IconContext } from "react-icons"

import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <IconContext.Provider value={{ style: {marginRight: '0.5rem'}}} >
            <FaHeartbeat />
        </IconContext.Provider>
        <span>Lilolave</span>
       </div>
    )
}

export default Header;