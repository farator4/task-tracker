import PropTypes from 'prop-types';
import TaskItem from "./TaskItem";
import { List } from 'antd';

const TaskList = ({ tasks, setTasks }) => {
  
  return (
    <List
      bordered
      dataSource={tasks}
      renderItem={(task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      )}
    />
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;