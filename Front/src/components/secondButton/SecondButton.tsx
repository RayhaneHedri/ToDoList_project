import React from 'react';
import { Button } from 'antd';

import styles from './SecondButton.module.css';


const SecondButton: React.FC = () => {
  return (
    <Button type="primary" className={styles.secondButton} >hello2</Button>
  );
};

export default SecondButton;
