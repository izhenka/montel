import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { getVisibleTodoItems } from "../../slices/todoList";
import React from "react";

const TodoList = () => {
    const items = useSelector(getVisibleTodoItems);
    if (items.length === 0) {
        return <p>No tasks</p>
    }
    return (
        <ul className='todo-list'>
            {items.map(item =>
                <li key={item.id}>
                    <TodoItem {...item} />
                </li>)
            }
        </ul>
    )
};

export default TodoList;