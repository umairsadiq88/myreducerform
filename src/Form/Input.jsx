import React from 'react';
import from './Index.css'

const Input = ({ id, changed, value, label }) => (
    <label>{label}
        <input id={id} onChange={changed} value={value} />
    </label>
);

export default Input;