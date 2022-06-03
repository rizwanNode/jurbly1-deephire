import React, { useState } from 'react';

import styles from './styles/input.less';
const InputCustom = ({ icon, label, type, onPressEnter = null }) => {
  const [value, setvalue] = useState('');
  return (
    <div className={styles.Input}>
      <div className={` ${styles.input_container} `}>
        <label
          htmlFor=""
          className={`${styles.input_container_label} ${value.length > 0 &&
            styles.input_container_active_label} `}
        >
          {label}
        </label>
        <div
          className={`${styles.input_wrapper} ${value.length > 0 && styles.input_wrapper_active}`}
        >
          <img src={icon} alt="" />
          <input
            type={type}
            value={value}
            onPressEnter={onPressEnter}
            className={styles.input_pure}
            onChange={e => {
              setvalue(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default InputCustom;
