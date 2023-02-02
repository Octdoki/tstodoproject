import React from 'react';
import { Todo, useTodosDispatch } from '../contexts/TodosContext';
import '../styles/TodoItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export type TodoItemProps = {
  todo: Todo
}

function TodoItem({ todo } : TodoItemProps){
    const dispatch =useTodosDispatch()

    const onToggle = ( ) =>{
        dispatch({
            type: 'TOGGLE',
            id: todo.id
        })
    }
    const onRemove = () =>{
        dispatch({
            type : 'REMOVE',
            id : todo.id
        })
    }
    return(
        <div className = "todoItem">
            <div className = "ItemIndex">
                <span>{todo.id}</span>
            </div>
            <div className = {`ItemContent ${todo.done ? 'done' : ''}`}>
                <span onClick={onToggle}> {todo.text}</span>
            </div>
            <div className = "ItemBtn">
                <FontAwesomeIcon icon={faTrashCan} onClick={onRemove} />
            </div>
        </div>
    );
}

export default TodoItem;
//항목 토클 및 제거