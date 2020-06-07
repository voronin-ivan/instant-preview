import React from 'react';
import { FieldArray, InjectedFormProps } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { FormMainFields } from './MainFields/FormMainFields';
import { FormCheckboxes } from './Checkboxes/FormCheckboxes';
import { FormFiles } from './Files/FormFiles';
import { FormButtons } from './Buttons/FormButtons';
import { reset as actionReset } from '../../redux/actions/preview';

import './Form.scss';

export interface FormProps extends InjectedFormProps {
    resetPreview: typeof actionReset;
    hideFrame: boolean;
}

export const Form = ({ reset, resetPreview, hideFrame }: FormProps) => {
    const clearValues = () => {
        reset();
        resetPreview();
    };

    const { t } = useTranslation();

    return (
        <form className="form">
            <FormMainFields />
            <FormCheckboxes />
            <div className="form__row">
                <FieldArray
                    name="posts"
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    component={FormFiles as any}
                    showFileName
                    maxFiles={18}
                    placeholder={t('post')}
                />
            </div>
            <div className="form__row">
                <FieldArray
                    name="stories"
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    component={FormFiles as any}
                    maxFiles={5}
                    placeholder={t('story')}
                />
            </div>
            <FormButtons clearValues={clearValues} hideFrame={hideFrame} />
        </form>
    );
};
