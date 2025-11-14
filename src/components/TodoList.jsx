import axios from "axios"
import {Link} from "react-router-dom"
import { useState, useEffect } from "react"

function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/todos')
                setTodos(res.data.message)
            } catch (error) {
                alert(error.response.data.message)
            }
        }
        fetchTodos()
    }, [])

    const deleteTodo = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/todos/${id}`)
            alert(res.data.message)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Todo list</li>

                {todos.map(todo => (
                    <li key={todo._id} className="list-row">
                        <div>
                            <div>{todo.title}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">
                                Completed:
                                <span>
                                    {todo.isCompleted}
                                </span>
                            </div>
                        </div>

                        <Link to={`/edit/${todo._id}`} className="btn btn-info">
                            Edit
                        </Link>

                        <button onClick={() => deleteTodo(todo._id)} className="btn btn-error">
                            Delete
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default TodoList
