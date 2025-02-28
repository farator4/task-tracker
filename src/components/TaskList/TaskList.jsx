import PropTypes from 'prop-types';
import TaskItem from "../TaskItem/TaskItem";
import { List, theme } from 'antd';
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, setTasks }) => {
  const { token } = theme.useToken();
  
  return (
    <List
      className={styles.listContainer}
      bordered
      dataSource={tasks}
      renderItem={(task) => (
        //<List.Item key={task.id}>  
          <TaskItem 
            task={task} 
            setTasks={setTasks}
            style={{
              background: token.colorBgContainer,
              borderRadius: token.borderRadius,
            }}
          />
        //</List.Item>
      )}                                //TODO resolve li in li
    />
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;