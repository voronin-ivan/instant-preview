import React from 'react';
import { Checkbox as ToolboxCheckbox } from 'react-toolbox/lib/checkbox';
import { InputState } from '../../models/input';
import i18n from '../../utils/i18n';

interface InputCheckboxState extends InputState {
    value: boolean;
}

interface CheckboxProps {
    input?: InputCheckboxState;
}

export const Checkbox = ({ input: { value, onChange, name } }: CheckboxProps) => (
    <ToolboxCheckbox
        label={i18n(name)}
        onChange={onChange}
        checked={value}
    />
);
