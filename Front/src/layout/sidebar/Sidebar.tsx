import React from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './Sidebar.module.scss';

const connectedUsers = [
  { id: 1, name: 'Ahmed', avatar: '' },
  { id: 2, name: 'Zeineb', avatar: '' },
  { id: 3, name: 'Ranim', avatar: '' },
  { id: 4, name: 'Youssef', avatar: '' },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.usersSection}>
        <h3 className={styles.sectionTitle}>Connected Users</h3>
        <List
          className={styles.userList}
          dataSource={connectedUsers}
          renderItem={user => (
            <List.Item className={styles.userListItem}>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={<span className={styles.username}>{user.name}</span>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Sidebar;
