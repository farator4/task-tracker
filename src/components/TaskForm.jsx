import { useState } from 'react';

const TaskForm = ({ setTasks }) => {
  const [text, setText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TaskForm;