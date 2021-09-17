import React from 'react';
import Category from './Category/Category';

import './SidebarLeft.css'

const categories = {
    Literature: ["Essays", "Reviews", "Poems"],
    Media: ["Film critique", "Game analysis", "Series introspection"]
}
let categoryList = [];
for(let category in categories) {
    categoryList.push(<Category category={category} categoryItems={categories[category]} />);
    }


const SidebarLeft = () => {
    return (
        <div className="SideBarLeft">
            <span id="Categories">Categories</span>
            <div>{categoryList}</div>
        </div>
    )
}

export default SidebarLeft;