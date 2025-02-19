import React from 'react';
import { Card, Row, Col, Typography, Progress, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import PrimaryButton from '../primaryButton/PrimaryButton';
import styles from './CardTask.module.scss';
import { TaskState } from '../../types/TaskState';

const { Title, Text } = Typography;

interface TaskCardProps {
  taskTitle: string;
  assignedUser: string;
  state: TaskState;
  days: number;
}

const CardTask: React.FC<TaskCardProps> = ({ taskTitle, assignedUser, state, days }) => {
  const isTaskComplete = state === 'done';
  const progressPercent = isTaskComplete ? 100 : 0;
  const progressStatus = isTaskComplete ? 'success' : 'exception';

  return (
    <Card bordered={false} className={styles.card}>
      <Row gutter={[16, 16]} align="middle">
        <Col flex="auto">
          <Title level={4} className={styles.title}>{taskTitle}</Title>
          <Text className={styles.assignedUser}>Assigned to: {assignedUser}</Text>
        </Col>
        <Col>
          <Space direction="vertical" align="center">
            <Progress
              type="circle"
              percent={progressPercent}
              status={progressStatus}
              width={30}
            />
            <Text className={styles.daysText}>{days} days</Text>
          </Space>
        </Col>
        <Col>
          <Space>
            <PrimaryButton>Update</PrimaryButton>
            <DeleteOutlined style={{ color: 'red', fontSize: '16px' }} />
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default CardTask;
