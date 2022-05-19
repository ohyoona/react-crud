import React from 'react';
import Item from './Item';

function List({items}) {
    return (
        <div>
            {
                items.map((item)=>
                <Item item = {item}/>
    )
            }
        </div>
    );
}

export default List;