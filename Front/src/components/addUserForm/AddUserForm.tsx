import { Form, Input, Select, message } from "antd";
import { useAddUser } from "../../hooks/user";
import PrimaryButton from "../primaryButton/PrimaryButton";
import { useKeycloak } from "@react-keycloak/web";

const { Option } = Select;

interface AddUserFormProps {
  form: any;
  onSuccess: () => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ form, onSuccess }) => {
  const { keycloak } = useKeycloak();
  const { addUser, loading } = useAddUser();

  const handleAddUser = () => {
    form.submit();
  };

  const handleSubmit = async (values: any) => {
    console.log("Keycloak Object:", keycloak);
    console.log("Keycloak Authenticated:", keycloak.authenticated);
    console.log("Keycloak Token:", keycloak.token);
  
    if (!keycloak || !keycloak.authenticated || !keycloak.token) {
      message.error("No authentication token found. Please log in.");
      return;
    }
  
    try {
      const response = await addUser(values, keycloak.token);
      if (response) {
        message.success(response.message);
        form.resetFields();
        onSuccess();
      }
    } catch (error) {
      message.error("Failed to add user.");
    }
  };
  

  return (
    <Form
      form={form}
      layout="vertical"
      name="add_user_form"
      initialValues={{ role: "user" }}
      onFinish={(values) => {
        console.log("Form Submitted with:", values);
        handleSubmit(values);
      }}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Please input the username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please input the email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="role"
        label="Role"
        rules={[{ required: true, message: "Please select a role!" }]}
      >
        <Select>
          <Option value="admin">Admin</Option>
          <Option value="editor">Editor</Option>
          <Option value="user">User</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input the password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <PrimaryButton key="submit" onClick={handleAddUser}>
          Submit
        </PrimaryButton>
      </Form.Item>
    </Form>
  );
};

export default AddUserForm;
