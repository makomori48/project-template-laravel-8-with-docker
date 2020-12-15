import React from "react";
import Todo from "./Todo";


function TodoItem({ todos, setTodos, setStatus, filter }) {
  const stat = (e) => {
    setStatus(e.target.value);
  };



  return (
    <div className='todoitem'>
      <h1>
      TRAINEE PROFILE
      </h1>
      <select className='todo__select' onChange={stat} name="ddd">
        <option value="all">Show All</option>
        <option value="st">EMPLOYEE</option>
        <option value="aca">TRAINEE</option>
      </select>
      <ul>
        {filter.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            Key={todo.id}
            text={todo.text}
            pic={todo.pic}
            birth={todo.birth}
            email={todo.email}
            gender={todo.gender}
            position={todo.position}
            password={todo.password}
            complete={todo.complete}
            
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoItem;