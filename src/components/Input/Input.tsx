import React from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { InputProps } from '../../models/input';

import './Input.scss';

export const Input = ({ input, type, placeholder, max }: InputProps) => {
    const { name, onChange, value: inputValue } = input;
    const textarea = name === 'bio';

    const validateChange = (value: string) => {
        if (type === 'number') {
            const reg = /^\d+$/; // only nums

            if (!value || (
                reg.test(value)
                && Number(value) <= max
                && !value.startsWith('0')
            )) onChange(value);
        } else if (value.length < 40) {
            onChange(value);
        }
    };

    return (
        <ToolboxInput
            type="text" // validation work`s only with "text"
            className="input"
            value={inputValue}
            label={placeholder}
            multiline={textarea}
            maxLength={textarea ? 150 : null}
            onChange={textarea ? onChange : validateChange}
        />
    );
};
