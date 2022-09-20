import React from "react";
import CardItem from './CardItem'

function TodoItem({item, index}){
    console.log(item)
    return(
        <li>
            <strong>{index+1}</strong>
            {item.title}
            <CardItem/>
        </li>
        
    )
}

export default TodoItem
