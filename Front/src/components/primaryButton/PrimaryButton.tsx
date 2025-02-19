import React from 'react';
import { Button } from 'antd';
import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick? : () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <Button type="primary" className={styles.primaryButton} onClick={onClick} >
      {children}
    </Button>
  );
};

export default PrimaryButton;
