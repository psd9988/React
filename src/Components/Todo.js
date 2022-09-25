import React, { useState } from 'react'
// import { Display } from './Display';
import './Todo.css'

export function Todo() {

    const [todo, setTodo] = useState("");
    const [saveToDoList, setTodoList] = useState([]);

    const changedInput = (e) => {
        setTodo(e.target.value);
    }

    const formSubmitFunc = (e) => {
        e.preventDefault();
        const newToDo = todo;
        setTodoList([...saveToDoList, newToDo])
        setTodo('')
    }

    return (
        <div className='container'>
            <h1 className="mainHeading">My To Do App</h1>
            <form onSubmit={formSubmitFunc}>

                <input type="text" name="addToDo" value={todo} onChange={changedInput} />
                <button>Add todo</button>

                {
                    saveToDoList.map((eachToDo, index) =>
                    (
                        <div className='displayContainer' key={`todo ${index}`}>
                            <h3>{eachToDo}</h3>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    ))
                }
            </form>
        </div>
    )
}
