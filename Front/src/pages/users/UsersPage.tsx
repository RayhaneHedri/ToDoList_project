import React, { useState } from "react";
import { Row, Col, Input, Modal, Form } from "antd";
import styles from "./UsersPage.module.scss";
import SecondButton from "../../components/secondButton/SecondButton";
import UserCard from "../../components/cardUser/CardUser";
import { UserAddOutlined } from "@ant-design/icons";
import AddUserForm from "../../components/addUserForm/AddUserForm";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";

const { Search } = Input;

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([
    { name: "Ranim", role: "Administrator", email: "ranim@gmail.com" },
    { name: "Ahmed", role: "Editor", email: "ahmed@gmail.com" },
    { name: "Youssef", role: "Viewer", email: "youssef@gmail.com" },
    { name: "Zeineb", role: "Developer", email: "zeineb@gmail.com" },
    { name: "Rayhane", role: "Manager", email: "rayhane@gmail.com" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleAddUser = () => {
    console.log("submit clicked")
    form.submit();
  };

  return (
    <div className={styles.usersPage}>
      <h1>Users Page</h1>
      <div className={styles.controls}>
        <Search
          className={styles.customSearch}
          placeholder="Search users"
          onSearch={handleSearch}
          allowClear
        />
        <SecondButton onClick={showModal}>
          <span>
            <UserAddOutlined />
          </span>
          Add User
        </SecondButton>
        <Modal
          title="Add User"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <AddUserForm form={form} onSuccess={handleCancel} />

        </Modal>
      </div>
      <div className={styles.gridWrapper}>
        <Row gutter={[16, 16]} justify="center" className={styles.userGrid}>
          {users.map((user, index) => (
            <Col key={index} xs={24} lg={12} xl={8} xxl={6}>
              <UserCard name={user.name} role={user.role} email={user.email} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default UsersPage;
