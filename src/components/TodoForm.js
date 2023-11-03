import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // input k baad clean hone k liye
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter the task details?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
