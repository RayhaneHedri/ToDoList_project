import React from 'react';
import { Button } from 'antd';

import styles from './SecondButton.module.css';

interface SecondButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const SecondButton: React.FC<SecondButtonProps> = ({ children, onClick }) => {
    return (
      <Button type="primary" className={styles.secondButton} onClick={onClick}>
        {children}
      </Button>
    );
  };

export default SecondButton;
