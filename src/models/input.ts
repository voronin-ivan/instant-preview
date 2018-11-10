import { WrappedFieldProps } from 'redux-form';

export type InputProps = (
    WrappedFieldProps & React.InputHTMLAttributes<HTMLInputElement>
);
