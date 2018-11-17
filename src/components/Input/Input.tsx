import React from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { InputProps } from '../../models/input';

import './Input.scss';

export const Input = ({ input, placeholder, maxLength }: InputProps) => {
    const { name, onChange, value } = input;

    return (
        <ToolboxInput
            type="text" // normalize work`s only with "text"
            className="input"
            value={value}
            label={placeholder}
            multiline={name === 'bio'}
            maxLength={maxLength}
            onChange={onChange}
        />
    );
};
