import React, { useState } from 'react';
import styles from './FormInputPassword.module.css';
import image from '../../../../../images/password_eye.png';
import imageOff from '../../../../../images/password_eye-off.png';

const FromInputPassword = () => {
  const [inputValue, setInputValue] = useState(''); //Состояние для инпута
  const [inputType, setInputType] = useState('password'); //Состояние для типа инпута
  const [imageLink, setImageLink] = useState(image); //Состояние для ссылки на картинку

  const toggleInputType = () => {
    if (inputType === 'password') {
      setInputType('text');
      setImageLink(imageOff);
    } else {
      setInputType('password');
      setImageLink(image);
    }
  };

  return (
    <div className={styles.input_password_container}>
      <input
        type={inputType}
        className={styles.input_password}
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button
        type="button"
        className={styles.input_password_button}
        onClick={() => toggleInputType()}
      >
        <img
          className={styles.input_password_image}
          src={imageLink}
          alt='Кнопка "показать/скрыть пароль"'
        />
      </button>
    </div>
  );
};

export default FromInputPassword;
