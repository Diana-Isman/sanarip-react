import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props){
    return(
        <ul>
            {props.todoLists.map((todo, index)=>{
                return <TodoItem item={todo} index={index} key={todo.id}/>
            })}
        </ul>
    )
};