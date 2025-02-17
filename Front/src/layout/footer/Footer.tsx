import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import styles from './Footer.module.scss';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter className={styles.footer}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Text className={styles.footerText}>
          Ant Design Custom Footer ©2025
        </Text>
        <Space size="large">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined className={styles.icon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined className={styles.icon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined className={styles.icon} />
          </a>
        </Space>
      </Space>
    </AntFooter>
  );
};

export default Footer;
