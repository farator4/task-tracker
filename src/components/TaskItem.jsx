import PropTypes from 'prop-types';
import { Checkbox, Button, List } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";

const TaskItem = ({ task, setTasks }) => {

  const toggleComplete = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((t) => t.id !== task.id);
    });
  };

  return (
    <List.Item
      actions={[
        <Button
          key="delete"
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={deleteTask}
        />,
      ]}
    >
      <Checkbox
        checked={task.completed}
        onChange={toggleComplete}
      >
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none"
          }}
        >
          {task.text}
        </span>
      </Checkbox>
    </List.Item>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskItem;