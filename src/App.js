import { useState } from 'react';

function App() {
  const [tasks, setTask] = useState([])
  function onClickAdd() {
    const text = prompt('please add text')
    setTask([...tasks, text])
  }

  return (
      <div className="App">
        <h1>List tasks</h1>
        <button onClick={onClickAdd}>Добавить</button>
        {tasks.map(task => (
            <div>
              <h2>{task}</h2>
              <button>delete</button>
            </div>
        ))}
      </div>
  );
}

export default App;