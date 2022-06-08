import React, { useState } from 'react';

import '../styles/input.css';
import arrow_dropdown from '../assets/img/arrow_dropdown.svg';
const Select = ({ icon, label, list }) => {
  const [value, setvalue] = useState('');
  return (
    <div className="Input">
      <div className={`input_container ${value.length > 0 && 'active'}`}>
        <div className={`input_wrapper ${value.length > 0 && 'active'}`}>
          <img src={icon} alt="" />
          <select
            onChange={e => {
              setvalue(e.target.value);
            }}
          >
            <option disabled selected>
              {label}
            </option>
            {list.map(EachOption => (
              <option value={EachOption}>{EachOption}</option>
            ))}
          </select>

          <img src={arrow_dropdown} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Select;
