import React from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { InputModel } from '../../models/input';

import './Input.scss';

export const Input = ({ input, maxLength, label }: InputModel) => {
    const { name, onChange, value } = input;

    return (
        <ToolboxInput
            type="text" // normalize works only with "text"
            className="input"
            value={value}
            label={label}
            multiline={name === 'bio'}
            maxLength={maxLength}
            onChange={onChange}
        />
    );
};
