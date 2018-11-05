import React from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { InputState } from '../../models/input';

import './Input.scss';

interface InputProps {
    input?: InputState;
    type: 'text' | 'number';
    placeholder: string;
}

export const Input = ({ input, type, placeholder }: InputProps) => {
    const { name, onChange, value } = input;

    return (
        <ToolboxInput
            className="input"
            type={type}
            label={placeholder}
            onChange={onChange}
            value={value}
            multiline={name === 'description'}
        />
    );
};
