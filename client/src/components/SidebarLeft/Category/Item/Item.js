import React from 'react';
import './Item.css'

const Item = ({item, setFilter}) => {
    return (
        <li onClick={() => setFilter(item)}>{item}</li>
    )
}

export default Item;