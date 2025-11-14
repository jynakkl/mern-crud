import axios from "axios"
import { useState } from "react"


function TodoForm() {

    const [formData, setFormData] = useState({})

    const handleChanges = e => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:3000/api/todos',formData)
            alert(res.data.message)
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    console.log(formData)

    return (
        <div className="max-w-xl mx-auto my-20 text-center">
            <form onSubmit={handleSubmit} className="flex gap-20 flex-col">
                <div>
                    <h1>Todo title</h1>
                    <input onChange={handleChanges} className="input focus:outline-0" type="text" name="title" id="title" placeholder="Todo title" />
                </div>
                <div>
                    <button className="btn btn-square w-80">Create todo</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm