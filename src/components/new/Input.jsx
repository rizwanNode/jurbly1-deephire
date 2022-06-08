import React, { useState } from 'react';

import '../styles/input.css';
const Input = ({ icon, label, type }) => {
  const [value, setvalue] = useState('');
  return (
    <div className="Input">
      <div className={`input_container ${value.length > 0 && 'active'}`}>
        <label htmlFor="">{label}</label>
        <div className={`input_wrapper ${value.length > 0 && 'active'}`}>
          <img src={icon} alt="" />
          <input
            type={type}
            value={value}
            onChange={e => {
              setvalue(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Input;
