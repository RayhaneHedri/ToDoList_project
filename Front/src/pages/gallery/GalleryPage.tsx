import React, { useState } from "react";
import { Upload, Modal, List, Typography, Divider } from "antd";
import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./GalleryPage.module.scss";
import SecondButton from "../../components/secondButton/SecondButton";

const { Title } = Typography;

const GalleryPage: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: any) => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url?.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList }: any) => setFileList(fileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className={styles.galleryPage}>
      <Title level={2}>Gallery</Title>
      <Upload
        action="../../../public/gallery/business-corporate-people-working-concept.jpg"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>

      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="preview" style={{ width: "100%" }} src={previewImage} />
      </Modal>

      <Divider />

      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={fileList}
        renderItem={(item) => (
          <List.Item>
            <div className={styles.photoWrapper}>
              <img
                src={item.url || item.thumbUrl}
                alt={item.name}
                className={styles.galleryImage}
              />
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
  );
};

export default GalleryPage;
