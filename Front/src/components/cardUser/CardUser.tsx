import React from 'react';
import { Card, Row, Col, Avatar, Typography, Button, Badge } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import PrimaryButton from '../primaryButton/PrimaryButton';
import styles from './cardUser.module.scss';

const { Title, Text } = Typography;

interface UserCardProps {
  name: string;
  role: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, role, email }) => {
    return (
      <Card bordered={false} className={styles.card}>
        <Row gutter={[16, 16]} align="middle">
          <Col>
            <Avatar size={64} icon={<UserOutlined />} />
          </Col>
          <Col flex="auto">
            <Title level={4} className={styles.name}>{name}</Title>
            <Text type="secondary" className={styles.role}>{role}</Text>
            <br />
            <Text className={styles.email}>{email}</Text>
          </Col>
          <Col>
            <PrimaryButton>Update</PrimaryButton>
            <Button
              shape="circle"
              icon={
                <Badge dot>
                  <BellOutlined style={{ color: 'white' }} />
                </Badge>
              }
              className={styles.notificationButton}
            />
          </Col>
        </Row>
      </Card>
    );
  };
  
export default UserCard;
