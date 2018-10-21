import React from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';
import { InputState } from '../../models/input';
import i18n from '../../utils/i18n';

import './Input.scss';

interface InputTextState extends InputState {
    value: string;
}

interface InputProps {
    input?: InputTextState;
}

export const Input = ({ input: { value, onChange, name } }: InputProps) => (
    <ToolboxInput
        type="text"
        label={i18n(name)}
        onChange={onChange}
        value={value}
    />
);
