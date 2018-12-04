import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { Checkbox as ToolboxCheckbox } from 'react-toolbox/lib/checkbox';

import './Checkbox.scss';

interface ICheckBoxProps extends WrappedFieldProps {
    label: string;
}

export const Checkbox = ({ input: { value, onChange }, label }: ICheckBoxProps) => (
    <ToolboxCheckbox
        className="checkbox"
        label={label}
        onChange={onChange}
        checked={Boolean(value)}
    />
);
