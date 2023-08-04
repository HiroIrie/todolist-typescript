import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import './App.css';

type Todo = {
  inputValue: string;
  id: number;
  cheked: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      cheked: false
    }
    if(inputValue==='')return
    setTodos([newTodo, ...todos]);
    setInputValue('');
    console.log(todos);
  }

  const handleDelete=(id: number)=>{
   const newTodos= todos.filter((todo)=>todo.id !==id);
   setTodos(newTodos);
  }

  const handleEdit=(id:number,inputValue:string)=>{
   const newTodos=todos.map((todo)=>{
    if(todo.id===id){
      todo.inputValue=inputValue
    }
    return todo
   })
  setTodos(newTodos);
  }

  const handleChacked=(id:number,checked:boolean)=>{
  const newTodos= todos.map(todo=>{
    if(todo.id===id){
      todo.cheked=!checked
    }
    return todo
   });
   setTodos(newTodos);
  }
  return (
    <div className="App">
      <div className="todo-container">
        <div className="todo-header">Todo List</div>
        <ul className="todo-list">
          {todos.map((todo) => {
            return (
              <li className="todo-item" key={todo.id}>
                <input type="text" disabled={todo.cheked} placeholder="todoを追加" value={todo.inputValue} onChange={(e) => { handleEdit(todo.id,e.target.value) }} />
                <input type="checkbox" onChange={()=>{handleChacked(todo.id,todo.cheked)}}/>
                <button onClick={()=>{handleDelete(todo.id)}}>削除</button>
              </li>
            )

          })}

        </ul>
        <div className="todo-footer">
          <form onSubmit={(e) => { handleSubmit(e) }}>
            <input type="text" placeholder="todoを追加" value={inputValue} onChange={(e) => { handleChange(e) }} />
            <button type="submit">作成</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
