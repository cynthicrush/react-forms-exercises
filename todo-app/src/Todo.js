import React, { useState } from "react";

function Todo({ task = 'first todo', id = 1, remove, update}) {
    const [editTask, setEditTask] = useState(task)
    const [idEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit)
    }

    const handleChange = evt => {
        setEditTask(evt.target.value)
    }

    const handleDelete = () => remove(id)

    const handleUpdate = evt => {
        evt.preventDefault()
        update(id, editTask)
        setIsEditing(false)
    }

    let todoList = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </div>
    )

    if (idEditing) {
        todoList = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input 
                        type='text'
                        value={editTask}
                        onChange={handleChange}
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }

    return todoList
}

export default Todo