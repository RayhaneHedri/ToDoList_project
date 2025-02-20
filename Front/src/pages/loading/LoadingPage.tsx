import React from 'react';
import { Spin, Typography } from 'antd';
import styles from './LoadingPage.module.scss';

const { Title } = Typography;

const LoadingPage: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <Spin size="large" className={styles.spinner} />
      <Title level={3} className={styles.loadingText}>
        Loading...
      </Title>
    </div>
  );
};

export default LoadingPage;
