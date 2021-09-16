import React from 'react';
import Category from './Category/Category';

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
            {categoryList}
        </div>
    )
}

export default SidebarLeft;