import React from 'react';
import image from '../../../images/autorization_rectangles.png';
import styles from './ImageBlock.module.css';

const ImageBlock = () => {
  return <img className={styles.image} src={image} alt="Изображение квадратов" />;
};

export default ImageBlock;
