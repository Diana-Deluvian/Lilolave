import React from 'react';
import './Item.css';
import { useHistory } from "react-router-dom";

const Item = ({item, setFilter}) => {
    let history = useHistory();
    return (
        <li className="sidebarLeftItem" onClick={() => {
            history.push(`/`);
            setFilter(item)}
        }>{item}</li>
    )
}

export default Item;