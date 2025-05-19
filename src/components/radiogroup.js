import React from 'react';
import '../styles/global.css';

const RadioGroup = ({ options, selected, onChange, name }) => {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="radio-label">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;