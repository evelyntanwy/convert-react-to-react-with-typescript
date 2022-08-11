import { useState } from 'react';
import TodoItem from './todoitem'

interface ToDoIt {
  id: number;
  text: string
}

const DEFAULT_TODO_ITEMS = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
  { id: 3, text: 'Meditate' } 
];

const Todo = () => {

    const [todoitems, setTodoItems] = useState<ToDoIt[]>(DEFAULT_TODO_ITEMS);
    const [inputTodoValue, setInputTodoValue] = useState('');

    const deleteTodoItem = (id: number) => setTodoItems([...todoitems.filter(i => i.id !== id)]);

    return(
        <div style={{color: "blue", padding:"1em", border:"solid"}} >
            <h2>List of things to do</h2>
            <div style={{margin:"0.5em"}} >
                <input
                  type="text"
                  value={inputTodoValue}
                  onChange={e => setInputTodoValue(e.currentTarget.value)}
                />
                &nbsp;
                <button
                  onClick={e =>
                    setTodoItems([...todoitems, { id: todoitems.length + 1, text: inputTodoValue }])
                  }
                >
                  Add a Todo 
                </button>
            </div>
            <div className="todo__items">
                {todoitems.map(t => (
                    <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteTodoItem} />
                ))}
            </div>
        </div>
    )
}
export default Todo
