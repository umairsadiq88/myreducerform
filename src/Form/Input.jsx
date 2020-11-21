import React from 'react';
import '../App.css'

const Input = ({ id, changed, value, label, type }) => (
    <label>{label}
        <input id={id} onChange={changed} value={value} type={type} />
    </label>

);

export default Input;