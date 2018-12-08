import { WrappedFieldProps } from 'redux-form';

export type InputModel = (
    WrappedFieldProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    {
        label: string
    }
);
