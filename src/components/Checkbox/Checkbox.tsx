import React from 'react';
import { Checkbox as ToolboxCheckbox } from 'react-toolbox/lib/checkbox';

import './Checkbox.scss';

interface ICheckBoxProps {
    label: string;
    input?: {
        value: boolean | string;
        onChange: (value: boolean) => void;
    }
}

export const Checkbox = ({ input: { value, onChange }, label }: ICheckBoxProps) => (
    <ToolboxCheckbox
        className="checkbox"
        label={label}
        onChange={onChange}
        checked={Boolean(value)}
    />
);
