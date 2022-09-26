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
        if(todo.length > 0){
            const newToDo = todo;
            setTodoList([...saveToDoList, newToDo])
            setTodo('')
        }
    }

    const delteBtn = (e) => {
        e.preventDefault()
        let target = e.target;
        let parent = target.parentElement
        parent.remove()
    }

    const doubleClickEditBtn = (e) => {
        e.preventDefault()
        let target = e.target;
        let parent = target.parentElement
        parent.childNodes[0].contentEditable = 'true'
        target.innerText = 'Done'
        parent.childNodes[0].style.border = "2px solid black"
        parent.childNodes[0].style.borderRadius = '5px'
    }

    const oneClickEditBtn = (e) => {
        e.preventDefault()
        let target = e.target;
        let parent = target.parentElement
        parent.childNodes[0].contentEditable = 'false'
        target.innerText = 'DoubleClick to edit'
        parent.childNodes[0].style.border = "none"
    }

    return (
        <div className='container'>
            <h1 className="mainHeading">My To Do App</h1>
            <form onSubmit={formSubmitFunc}>

                <input type="text" name="addToDo" value={todo} onChange={changedInput} />
                <button className='todoBtn'>Add todo</button>
                {
                    saveToDoList.map((eachToDo, index) =>
                    (
                        <div className='displayContainer' id={index} key={`todo ${index}`}>
                            <h3 >{eachToDo}</h3>
                            <button onClick={delteBtn}>Delete</button>
                            <button className='editable' onClick={oneClickEditBtn} onDoubleClick={doubleClickEditBtn}>DoubleClick to edit</button>
                        </div>
                    ))
                }
            </form>
        </div>
    )
}
