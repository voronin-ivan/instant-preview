import React from 'react';
import { Field } from 'redux-form';
import { Checkbox } from '../../Checkbox/Checkbox';
import i18n from '../../../utils/i18n';

export const FormCheckboxes = () => (
    <div className="form__row form__row--checkboxes">
        <div className="form__checkbox">
            <Field
                name="activeStory"
                component={Checkbox}
                label={i18n('activeStory')}
            />
        </div>
        <div className="form__checkbox">
            <Field
                name="verifiedAcc"
                component={Checkbox}
                label={i18n('verifiedAcc')}
            />
        </div>
        <div className="form__checkbox">
            <Field
                name="showEmail"
                component={Checkbox}
                label={i18n('showEmail')}
            />
        </div>
        <div className="form__checkbox">
            <Field
                name="showPhone"
                component={Checkbox}
                label={i18n('showPhone')}
            />
        </div>
    </div>
);
