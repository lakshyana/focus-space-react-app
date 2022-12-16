import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
// import thunks
import {createTodoThunk, deleteTodoThunk, findAllTodosThunk, updateTodoThunk} from "./todo-thunks";


// import "../../index.css";

const Todo = () => {
    const {todos, loading} = useSelector((state) => state.todos)
    const [todo, setTodo] = useState({title: 'New Todo'})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllTodosThunk())
    }   , [])

    function toggle(elementId) {
        const element = document.getElementById(elementId);
        element.classList.toggle("hidden");
        // if (element.style.display === "none" || !element.style.display) {
        //     element.style.display = "block";
        // } else {
        //     element.style.display = "none";
        // }
    }

    return (
        <>
            {
                <>
                <div className={"d-flex flex-col justify-content-end text-sm-2"}>
                    <ul id="toggle" className="hidden list-group">
                        {
                            todos.map((todo) =>
                                <li className="list-group-item wd-bg-lb"
                                    key={todo._id}>
                                    <i onClick={() => {
                                        dispatch(deleteTodoThunk(todo._id))
                                    }}
                                       className="bi bi-x-lg float-end text-white"></i>

                                    <span className={'d-flex align-content-start'}>
                                        <input type="checkbox" className={"me-2"}
                                               checked={todo.completed}
                                               onClick={(e) => {
                                                   dispatch(updateTodoThunk({...todo, completed: e.target.checked}))
                                               }}

                                        />
                                    <span onChange={(e) =>
                                    {todo.completed ? e.target.style.textDecoration
                                        = "line-through" : e.target.style.textDecoration = "none"}}
                                        className={todo.completed ? "text-decoration-line-through text-muted" : "text-white"}>{todo.title}</span>
                                    </span>

                                </li>
                            )
                        }

                        <li className="list-group-item wd-bg-lg">
                            <input
                                className="form-control w-100"
                                onChange={(e) =>
                                    setTodo({...todo, title: e.target.value})}
                                value={todo.title}
                                onKeyUp={
                                    (e) => {
                                        if (e.key === 'Enter') { // if enter key is pressed
                                            dispatch(createTodoThunk(
                                                {
                                                    title: todo.title
                                                }
                                            ))
                                        }
                                    }
                                }
                            />
                        </li>

                    </ul>
                </div>

                <button id={"toggler"} onClick={() => toggle("toggle") }
                        className="btn btn-dark float-end">
                    <h2> 📝Todo</h2>
                </button>
                </>
            }

        </>

)
}

export default Todo;
