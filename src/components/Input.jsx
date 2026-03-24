import React from 'react';
import './Input.css';

const Input = ({ label, ...props }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label label-sm">{label}</label>}
      <input className="input-field" {...props} />
    </div>
  );
};

export default Input;
