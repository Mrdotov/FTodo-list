import React, { useState,useEffect } from 'react';
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);


  
  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setData(data.message))
    .catch((error) => console.error(error));
  }, []);

    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        addTodo();
      }
    };
  
    const addTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
  const DeleteTodo=(todo)=>{
  const updateTodos = todos.filter((item)=>item !== todo)
    setTodos(updateTodos)
  
  }

    return (
      <div className='Todos'>
          <div className='block_todos'>
          <p>{!data ?  "Loading..."  : data }</p>

            <input
              placeholder="Enter..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo} <button onClick={()=>DeleteTodo(todo)}>Delete</button></li>
              ))
            
              }
            </ul>
        </div>
      </div>
    );
  };

  export default TodoList;