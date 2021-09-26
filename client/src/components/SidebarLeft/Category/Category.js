import React from 'react';
import Item from './Item/Item';

import './Category.css';

const Category = ({categoryItems, category, setFilter}) => {
    let items = [];
    for(let item in categoryItems) {
        items.push(<Item item={categoryItems[item]} setFilter={setFilter} />);
        }

console.log(categoryItems);
    return(
        <ul className="sidebarLeftCategory"> <span>{category}</span>
            {items}
        </ul>
    )
}

export default Category;