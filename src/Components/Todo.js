import React, { useState } from 'react'
import './Todo.css'

export function Todo() {

    const [todo, setTodo] = useState("");

    const changedInput = (e) => {
        setTodo(e.target.value);
        console.log(todo)
    }

    const formSubmitFunc = (e) => {
        e.preventDefault();
 
    }

    return (
        <div className='container'>
            <h1 className="mainHeading">My To Do App</h1>
            <form onSubmit={formSubmitFunc}>

                <input type="text" name="addToDo" value={todo} onChange= {changedInput} />
                <button>Add todo</button>

            </form>
        </div>
    )
}
