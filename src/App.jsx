import { useState } from 'react';
import { ConfigProvider } from "antd";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import theme from "./theme.js";
import styles from './App.module.css';

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <ConfigProvider theme={theme}>
      <div className={styles.app}>
        <h1>Task Tracker</h1>
        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </ConfigProvider>
  
  )
}

export default App;