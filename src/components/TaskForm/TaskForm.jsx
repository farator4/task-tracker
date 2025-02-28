import PropTypes from 'prop-types';
import { Input, Button, Form } from 'antd';
import { v4 as uuidv4 } from "uuid";
// import styles from "./TaskForm.module.css";

const TaskForm = ({ setTasks }) => {
  const [form] = Form.useForm();
  
  const handleSubmit = (values) => {
    const trimmedText = values.taskText.trim();
    if (!trimmedText) return;
    
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuidv4(),
        text: trimmedText,
        completed: false
      }
    ]);
    form.setFieldsValue({ taskText: "" });
    form.getFieldInstance("taskText").focus();
  };

  return (
    <Form
      form={form} 
      layout="inline" 
      onFinish={handleSubmit}
    >
      <Form.Item 
        name="taskText"
        style={{ flexGrow: 1 }}
        rules={[{
          required: true,
          message: "Task cannot be empty"
        }]}
      >
        <Input placeholder="Add your task..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Add</Button>
      </Form.Item>
    </Form>
  );
};

TaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export default TaskForm;