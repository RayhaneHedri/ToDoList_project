import React from 'react';
import { Button } from 'antd';
import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <Button type="primary" className={styles.primaryButton}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
