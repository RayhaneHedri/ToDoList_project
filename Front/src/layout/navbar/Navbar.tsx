import React from 'react';
import { Menu, Dropdown, Avatar, Badge } from 'antd';
import { BellOutlined, RightCircleOutlined, UserOutlined } from '@ant-design/icons';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
 
    const userMenu = [
        { key: 'profile', label: 'Profile' },
        { key: 'settings', label: 'Settings' },
        { key: 'logout', label: 'Logout' },
      ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
    
        <RightCircleOutlined className={styles.icon} />
        <h2>logo</h2>
    
        
      </div>

      <ul className={styles.navLinks}>
        <li><a href="#home">Tasks</a></li>
        <li><a href="#about">Users</a></li>
        <li><a href="#services">Profile</a></li>
        <li><a href="#contact">Gallery</a></li>
      </ul>

     
      <div className={styles.icons}>
        <Badge count={5} size="small">
          <BellOutlined className={styles.icon} />
        </Badge>

        <Dropdown menu={{items: userMenu}} trigger={['click']}>
          <Avatar 
            size="large" 
            icon={<UserOutlined />} 
            className={styles.avatar} 
            style={{ cursor: 'pointer' }}
          />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
