import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { Checkbox as ToolboxCheckbox } from 'react-toolbox/lib/checkbox';
import i18n from '../../utils/i18n';

import './Checkbox.scss';

export const Checkbox = ({ input: { value, onChange, name } }: WrappedFieldProps) => (
    <ToolboxCheckbox
        className="checkbox"
        label={i18n(name)}
        onChange={onChange}
        checked={Boolean(value)}
    />
);
