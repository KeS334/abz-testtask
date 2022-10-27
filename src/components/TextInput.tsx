import React from 'react';

interface TextInputProps{
    type: string,
    name: string,
    label: string,
    value: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({type, name, label, value, changeHandler}:TextInputProps) => {
    return (
            <div className="form-block__input-container">
                <input
                    type={type}
                    name={name}
                    placeholder={label}
                    id={name}
                    value={value}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor={name}>{label}</label>
            </div>
    );
};

export default TextInput;
