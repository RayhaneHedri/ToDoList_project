import React from "react";
import { Avatar, Typography,Divider, List } from "antd";
import { ArrowRightOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./ProfilePage.module.scss";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import SecondButton from "../../components/secondButton/SecondButton";
import photo1 from "../../../public/gallery/business-corporate-people-working-concept.jpg";
import photo2 from "../../../public/gallery/group-elephants-walking-dry-grass-wilderness.jpg";
import photo3 from "../../../public/gallery/happy-waiter-serving-food-group-cheerful-friends-pub.jpg";
import photo4 from "../../../public/gallery/get.jpeg";

const { Title, Text } = Typography;

const ProfilePage: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    bio: "A passionate developer and tech enthusiast.",
  };

  // Import images from your gallery folder
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <div className={styles.profilePage}>
      <div className={styles.cover}></div>
      <div className={styles.profileContent}>
        <Avatar
          size={100}
          icon={<UserOutlined />}
          className={styles.profileAvatar}
        />
        <div className={styles.profileDetails}>
          <Title level={3}>{user.name}</Title>
          <Text>{user.email}</Text>
          <p>{user.bio}</p>
          <PrimaryButton onClick={() => {}}>Update Profile</PrimaryButton>
        </div>
      </div>

      <Divider />

      <div className={styles.photosSection}>
        <Title level={4}>Photos</Title>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={photos}
          renderItem={(photo, index) => (
            <List.Item key={index}>
              <div className={styles.photoWrapper}>
                <img src={photo} alt={`Photo ${index + 1}`} className={styles.photoImg} />
              </div>
            </List.Item>
          )}
        />
        <div className={styles.seeMoreContainer}>
          <SecondButton onClick={() => {}}>
            <span>
              <ArrowRightOutlined />
            </span>
            See More
          </SecondButton>
        </div>
      </div>

      <Divider />
      <div className={styles.photosSection}>
        <Title level={4}>Notifications</Title>
      </div>
    </div>
  );
};

export default ProfilePage;
