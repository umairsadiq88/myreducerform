import React, { useReducer } from "react";
import Input from './Input'


function formReducer(prevState, { value, key }) {
    const updatedElement = { ...prevState[key] };
    updatedElement.value = value;
    return { ...prevState, [key]: updatedElement };
};


const initialForm = {
    username: {
        label: 'Username',
        type: 'text',
        value: '',
    },
    email: {
        label: 'Email',
        type: 'email',
        value: '',
    },
    password: {
        label: 'Password',
        type: 'password',
        value: '',
        
    },
    cellnumber: {
        label: 'Cell Number',
        type: 'tel',
        value: '',
    },
    city: {
        label: 'City',
        value: '',
        type: 'text',
    },
    submit: {
        type: 'submit',
    },

};



const Form = () => {

const [state, dispatch] = useReducer(formReducer, initialForm);

    return (
        <>
        <div className="InputStyle">
        <h1> React useReducer Form </h1>
        
            <form >
                {Object.keys(state).map(key => (
                    <Input
                        changed={({ target: { value } }) => dispatch({ value, key })}
                        key={key}
                        id={key}
                        value={state[key].value}
                        type={state[key].type}
                        label={state[key].label}

                    />
                ))}
            </form>
        </div>
        </>
    );
};

export default Form;