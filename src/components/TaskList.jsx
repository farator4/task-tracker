import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};
export default TaskList;