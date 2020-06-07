import React from 'react';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '../../Checkbox/Checkbox';

export const FormCheckboxes = () => {
    const { t } = useTranslation();

    return (
        <div className="form__row form__row--checkboxes">
            <div className="form__checkbox">
                <Field
                    name="activeStory"
                    component={Checkbox}
                    label={t('activeStory')}
                />
            </div>
            <div className="form__checkbox">
                <Field
                    name="verifiedAcc"
                    component={Checkbox}
                    label={t('verifiedAcc')}
                />
            </div>
            <div className="form__checkbox">
                <Field
                    name="showEmail"
                    component={Checkbox}
                    label={t('showEmail')}
                />
            </div>
            <div className="form__checkbox">
                <Field
                    name="showPhone"
                    component={Checkbox}
                    label={t('showPhone')}
                />
            </div>
        </div>
    );
};
