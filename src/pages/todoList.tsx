import { useState } from 'react'

const TodoList = () => {
  const [tasks, setTasks] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue])
      setInputValue('')
    }
  }

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div>
      <input type='text' value={inputValue} placeholder='text' onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
