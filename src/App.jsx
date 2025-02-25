import { useState } from 'react';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import './styles.css';

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
