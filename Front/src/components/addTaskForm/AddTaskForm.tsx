import { useState } from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const AddTaskForm = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Form Values:', values);
        setVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <>
        <Form
          form={form}
          layout="vertical"
          name="add_task_form"
          initialValues={{ role: 'user' }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="days"
            label="Duration in days"
            rules={[{ required: true, message: 'Please input the number of Days!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="assigned user"
            label="Assigned User"
            rules={[{ required: true, message: 'Please select a user!' }]}
          >
            <Select>
              <Option value="admin">Ahmed</Option>
              <Option value="editor">Ranim</Option>
              <Option value="user">Youssef</Option>
            </Select>
          </Form.Item>
        </Form>
    </>
  );
};

export default AddTaskForm;
