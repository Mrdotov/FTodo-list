import React,{useState, useEffect, } from 'react'

// function MyTodos(){

// const [example, setExample] = UseState();


// useEffect(()=>{
//   console.log('Example: ', example);
// },[example])
// return (
//    <input
//   placeholder="Enter"
//   value={example}
//   onChange={(e) => setExample(e.target.value)}
// />
// )

// }






function App() {
  const [elements, setElements] = useState([]);
  const [inputValue ,setInputValue] = useState('');

const handleInputChange=(event)=>{
  setInputValue(event.target.value)
}

  const addElement = () => {
    const newElement = <div key={elements.length}>New Element</div>;
    setElements([...elements, newElement]);
  };

  return (
    <div className="App">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <p>Input value:{inputValue}</p>

      <button onClick={addElement}>Add Element</button>
      {elements}
    </div>
  );
}


export default App;
