import React from 'react';
import Item from './Item/Item';

const Category = ({categoryItems, category}) => {
    let items = [];
    for(let item in categoryItems) {
        items.push(<Item item={categoryItems[item]} />);
        }

console.log(categoryItems);
    return(
        <ul> {category}
            {items}
        </ul>
    )
}

export default Category;