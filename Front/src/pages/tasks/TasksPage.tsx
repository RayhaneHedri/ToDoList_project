import { Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import styles from "./TasksPage.module.scss";
import CardTask from "../../components/cardTask/CardTask";
import { TaskState } from "../../types/TaskState";
import SecondButton from "../../components/secondButton/SecondButton";
import { FolderAddOutlined } from "@ant-design/icons";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import AddTaskForm from "../../components/addTaskForm/addTaskForm";

const { Search } = Input;

const TasksPage: React.FC = () => {
  const tasks: {
    taskTitle: string;
    assignedUser: string;
    state: TaskState;
    days: number;
  }[] = [
    { taskTitle: "Task 1", assignedUser: "Ranim", state: "done", days: 3 },
    {
      taskTitle: "Task 2",
      assignedUser: "Ahmed",
      state: "not started",
      days: 5,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAddUser = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1>Tasks Page</h1>
      <div className={styles.controls}>
        <Search
          className={styles.customSearch}
          placeholder="Search tasks"
          onSearch={handleSearch}
          allowClear
        />

        <SecondButton onClick={showModal}>
          <span>
          <FolderAddOutlined />
          </span>
          Add Tasks
        </SecondButton>
        <Modal
          title="Add Task"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={[
            <SecondButton key="cancel" onClick={handleCancel}>
              Cancel
            </SecondButton>,
            <PrimaryButton key="submit" onClick={handleAddUser}>
              Submit
            </PrimaryButton>,
          ]}
        >
          <AddTaskForm />
        </Modal>
      </div>
      <h2>Latest</h2>
      <Row gutter={[16, 16]} className={styles.userGrid}>
        {tasks.map((task, index) => (
          <Col key={index} xs={24} lg={12} xl={8} xxl={6}>
            <CardTask
              taskTitle={task.taskTitle}
              assignedUser={task.assignedUser}
              state={task.state}
              days={task.days}
            />
          </Col>
        ))}
      </Row>
      <h2>Not Done</h2>
      <Row gutter={[16, 16]} className={styles.userGrid}>
        {tasks.map((task, index) => (
          <Col key={index} xs={24} lg={12} xl={8} xxl={6}>
            <CardTask
              taskTitle={task.taskTitle}
              assignedUser={task.assignedUser}
              state={task.state}
              days={task.days}
            />
          </Col>
        ))}
      </Row>
      <h2>Done</h2>
      <Row gutter={[16, 16]} className={styles.userGrid}>
        {tasks.map((task, index) => (
          <Col key={index} xs={24} lg={12} xl={8} xxl={6}>
            <CardTask
              taskTitle={task.taskTitle}
              assignedUser={task.assignedUser}
              state={task.state}
              days={task.days}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TasksPage;
