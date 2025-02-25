import PropTypes from 'prop-types';

const TaskItem = ({ task, setTasks }) => {

  const toggleComplete = () => {
    setTasks((prevTasks) => 
      prevTasks.map((t) =>
        t.id === task.id ? {...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((t) => t.id !== task.id);
    });
  };

  return (
    <li>
      <span
        onClick={toggleComplete}
        style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.text}
      </span>
      <button onClick={deleteTask}>X</button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskItem;