import React from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { InputState } from '../../models/input';
import i18n from '../../utils/i18n';

import './Input.scss';

interface InputProps {
    input?: InputState;
}

export const Input = ({ input: { value, onChange, name } }: InputProps) => (
    <ToolboxInput
        className="input"
        type="text"
        label={i18n(name)}
        onChange={onChange}
        value={value}
        multiline={name === 'description'}
    />
);
