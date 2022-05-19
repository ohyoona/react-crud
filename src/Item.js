import React from 'react';

function Item({item}) {
    return (
        <div>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.createdAt}</span>
        </div>
    );
}

export default Item;