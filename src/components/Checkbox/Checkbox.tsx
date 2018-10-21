import React from 'react';
import { Checkbox as ToolboxCheckbox } from 'react-toolbox/lib/checkbox';
import { InputState } from '../../models/input';
import i18n from '../../utils/i18n';

import './Checkbox.scss';

interface CheckboxProps {
    input?: InputState;
}

export const Checkbox = ({ input: { value, onChange, name } }: CheckboxProps) => (
    <ToolboxCheckbox
        className="checkbox"
        label={i18n(name)}
        onChange={onChange}
        checked={Boolean(value)}
    />
);
