import React from 'react';
import { FieldArray, InjectedFormProps } from 'redux-form';
import { Button } from '../Button/Button';
import { FormMainFields } from './MainFields/FormMainFields';
import { FormCheckboxes } from './Checkboxes/FormCheckboxes';
import { FormFiles } from './Files/FormFiles';
import { reset as actionReset } from '../../redux/actions/preview';
import i18n from '../../utils/i18n';

import './Form.scss';

interface FormProps extends InjectedFormProps {
    resetPreview: typeof actionReset;
}

export const Form = ({ reset, resetPreview }: FormProps) => {
    const clearValues = () => {
        reset();
        resetPreview();
    };

    return (
        <form className="form">
            <FormMainFields />
            <FormCheckboxes />
            <div className="form__row">
                <FieldArray
                    name="posts"
                    component={FormFiles}
                    props={{
                        showFileName: true,
                        maxFiles: 15,
                        placeholder: i18n('post'),
                    }}
                />
            </div>
            <div className="form__row">
                <FieldArray
                    name="stories"
                    component={FormFiles}
                    props={{
                        placeholder: i18n('story'),
                        maxFiles: 5,
                    }}
                />
            </div>
            <Button
                className="form__button-clear"
                theme="white"
                onClick={clearValues}
            >
                {i18n('clearValues')}
            </Button>
        </form>
    );
};
