import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import { reset as actionReset } from '../../redux/actions/preview';
import i18n from '../../utils/i18n';

interface FormProps extends InjectedFormProps {
    resetPreview: typeof actionReset;
}

export const Form = ({ reset, resetPreview }: FormProps) => {
    const login = i18n('login');
    const name = i18n('name');
    const onClick = () => {
        reset();
        resetPreview();
    };

    return (
        <form>
            <div>
                <label htmlFor="login">{login}</label>
                <Field
                    name="login"
                    id="login"
                    component="input"
                    type="text"
                    placeholder={login}
                />
            </div>
            <div>
                <label htmlFor="name">{name}</label>
                <Field
                    name="name"
                    id="name"
                    component="input"
                    type="text"
                    placeholder={name}
                />
            </div>
            <div>
                <label htmlFor="hasActiveStory">{i18n('hasActiveStory')}</label>
                <Field
                    name="hasActiveStory"
                    id="hasActiveStory"
                    component="input"
                    type="checkbox"
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
