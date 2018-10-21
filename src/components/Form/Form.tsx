import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { reset as actionReset } from '../../redux/actions/preview';
import i18n from '../../utils/i18n';

interface FormProps extends InjectedFormProps {
    resetPreview: typeof actionReset;
}

export const Form = ({ reset, resetPreview }: FormProps) => {
    const onClick = () => {
        reset();
        resetPreview();
    };

    return (
        <form>
            <div>
                <Field
                    name="login"
                    component={Input}
                    placeholder={i18n('login')}
                />
            </div>
            <div>
                <Field
                    name="name"
                    component={Input}
                    placeholder={i18n('name')}
                />
            </div>
            <div>
                <Field
                    name="hasActiveStory"
                    component={Checkbox}
                    placeholder={i18n('hasActiveStory')}
                />
            </div>
            <div>
                <label htmlFor="description">{i18n('description')}</label>
                <Field
                    name="description"
                    id="description"
                    component="textarea"
                />
            </div>
            <button type="button" onClick={onClick}>
                {i18n('clearValues')}
            </button>
        </form>
    );
};
