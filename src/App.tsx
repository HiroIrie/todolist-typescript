import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <div className="todo-header">Todo List</div>
        <ul className="todo-list">
          <li className="todo-item">
            <div>kakakakakakakak</div>
            <input type="checkbox" />
            <button>削除</button>
          </li>
        </ul>
        <div className="todo-footer">
          <form onSubmit={() => { }}>
            <input type="text" placeholder="todoを追加" onChange={()=>{}} />
            <button type="submit">作成</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
