import React, { useState } from 'react'

export default () => {
    /**
     *  1. O componente deve ter um formulário e um botão
     *  2. Ao preencher o formulário e clicar no botão uma nova tarefa é criada
     */

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleOnChange = e => setTask(e.target.value)

    const handleFormSubmit = e => {
        e.preventDefault()
        if(task.trim()){
            setTasks([...tasks, task])
            // setTask('')
        }
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    onChange={handleOnChange}
                    value={task}
                    placeholder='Type a new task here'
                    data-testid="form-input"
                />
                <button 
                    type="submit"
                    data-testid="form-button"
                >add new task</button>
            </form>
            <table data-testid="table">
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((elem,index) => {
                    return (
                    <tr key={`${elem}-${index}`}>
                        <td>{elem}</td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}