import React from 'react';
import Item from './Item/Item';

import './Category.css';

const Category = ({categoryItems, category}) => {
    let items = [];
    for(let item in categoryItems) {
        items.push(<Item item={categoryItems[item]} />);
        }

console.log(categoryItems);
    return(
        <ul> <span>{category}</span>
            {items}
        </ul>
    )
}

export default Category;