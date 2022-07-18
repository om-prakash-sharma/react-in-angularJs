'use strict';

import React, { useState, useEffect } from 'react';

const ManageTodo = ({ todo, addTodo, updateTodo }) => {

    const [todoText, setTodoText] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
        if (todo.text) {
            setTodoText(todo.text);
            setIsUpdate(true);
        }
    }, [todo]);

    return <div>
        <h3>{isUpdate ? 'Update' : 'Add'} Todo Using ReactJS</h3>
        <textarea value={todoText} onChange={(e) => setTodoText(e.target.value)}> {todoText} </textarea>
        <button className='actionBtn' type='button' onClick={() => {
            const data = {
                text: todoText,
                id: (todo.id || Date.now())
            };
            if (isUpdate) {
                updateTodo(data);
            } else {
                addTodo(data);
            }
            setTodoText('');
            setIsUpdate(false);
        }} > {isUpdate ? 'Update' : 'Add'}  Todo</button>
    </div>;
};

export default ManageTodo;