import PropTypes from 'prop-types';
import { Checkbox, Button, List, theme } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
import classNames from "classnames";

import styles from "./TaskItem.module.css";

const TaskItem = ({ task, setTasks }) => {
  const { token } = theme.useToken();

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
      className={classNames(styles.taskItem, {
        "completedTask": task.completed,
        "importantTask": task.text.includes("!!!"), //TODO get what's going on here
      })}
      // style={{
      //   padding: "10px",
      //   borderBottom: `1px solid ${token.colorBorderSecondary}`,
      // }}
      actions={[
        <Button
          key="delete"
          type="text"
          danger
          size="small"
          icon={<DeleteOutlined />}
          onClick={deleteTask}
          className={styles.taskDeleteButton} //? what's that, brada
        />,
      ]}
    >
      <Checkbox
        className={styles.taskCheckbox}
        checked={task.completed}
        onChange={toggleComplete}
        // style={{
        //   fontSize: "16px",
        //   color: token.colorText,
        // }}
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
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskItem;