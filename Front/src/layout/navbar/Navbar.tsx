import React, { useState } from "react";
import { Menu, Dropdown, Avatar, Badge, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import {
  BellOutlined,
  RightCircleOutlined,
  UserOutlined,
  MenuOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "./Navbar.module.scss";
import { useKeycloak } from "@react-keycloak/web";

const Navbar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { keycloak } = useKeycloak();

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={() => keycloak.logout()}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <RightCircleOutlined className={styles.icon} />
        <h2>logo</h2>
      </div>

      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link to="/tasks" onClick={closeDrawer}>
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={closeDrawer}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={closeDrawer}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeDrawer}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.icons}>
        <Badge count={5} size="small">
          <BellOutlined className={styles.icon} />
        </Badge>

        <Dropdown overlay={userMenu} trigger={["click"]}>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            className={styles.avatar}
            style={{ cursor: "pointer" }}
          />
        </Dropdown>

        <Button
          className={styles.menuButton}
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        className={styles.drawer}
      >
        <ul className={styles.drawerNavLinks}>
          <li>
            <Link to="/tasks" onClick={closeDrawer}>
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={closeDrawer}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={closeDrawer}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeDrawer}>
              Gallery
            </Link>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;
