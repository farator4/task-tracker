import PropTypes from 'prop-types';
import { Input, Button, Form } from 'antd';

const TaskForm = ({ setTasks }) => {
  const [form] = Form.useForm();
  
  const handleSubmit = (values) => {
    if (!values.taskText.trim()) return;
    
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        text: values.taskText,
        completed: false
      }
    ]);
    form.setFieldsValue({ taskText: "" });
    form.getFieldInstance("taskText").focus();
  }

  return (
    <Form form={form} layout="inline" onFinish={handleSubmit}>
      <Form.Item 
        name="taskText"
        style={{ flexGrow: 1 }}
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