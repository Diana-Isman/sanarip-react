import React from "react";
import TodoList from './TodoList'
import './App.css'



const todoLists=[
    {id:1, title: 'Learn English'},
    {id:2, title: 'Learn React.js'},
    {id:3, title: 'Watch YouTube tutorials'},
    {id:4, title: 'Watch Netflix'},
]


function App(){
    return (
        <div>
            <h1>Hello World</h1>
            <TodoList todoLists={todoLists}/>
        </div>
    )
}
export default App