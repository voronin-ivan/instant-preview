import React from 'react';
import { Field, FieldArray, InjectedFormProps } from 'redux-form';
import { Input } from '../Input/Input';
import { Upload } from '../Upload/Upload';
import { Checkbox } from '../Checkbox/Checkbox';
import { Files } from './Files/FormFiles';
import { Button } from '../Button/Button';
import { reset as actionReset } from '../../redux/actions/preview';
import i18n from '../../utils/i18n';
import {
    normalizeTextField,
    normalizeNumberField,
    normalizeMultilineField,
} from '../../utils/normalizer';

import './Form.scss';

interface FormProps extends InjectedFormProps {
    resetPreview: typeof actionReset;
}

export const Form = ({ reset, resetPreview }: FormProps) => {
    const maxLoginLength = 30;
    const maxNameLength = 30;
    const maxBioLength = 150;
    const maxPostsCount = 9999;
    const maxFollowingCount = 9999;
    const maxFollowersCount = 999999999; // 999M

    const clearValues = () => {
        reset();
        resetPreview();
    };

    return (
        <form className="form">
            <div className="form__row">
                <Field
                    name="login"
                    component={Input}
                    placeholder={i18n('login')}
                    maxLength={maxLoginLength}
                />
            </div>
            <div className="form__row">
                <Field
                    name="photo"
                    component={Upload}
                    placeholder={i18n('photo')}
                    props={{
                        showFileName: true,
                        showClearButton: true,
                    }}
                />
            </div>
            <div className="form__row">
                <Field
                    name="postsCount"
                    component={Input}
                    placeholder={i18n('postsCount')}
                    normalize={normalizeNumberField(maxPostsCount)}
                />
            </div>
            <div className="form__row">
                <Field
                    name="followersCount"
                    component={Input}
                    placeholder={i18n('followersCount')}
                    normalize={normalizeNumberField(maxFollowersCount)}
                />
            </div>
            <div className="form__row">
                <Field
                    name="followingCount"
                    component={Input}
                    placeholder={i18n('followingCount')}
                    normalize={normalizeNumberField(maxFollowingCount)}
                />
            </div>
            <div className="form__row">
                <Field
                    name="name"
                    component={Input}
                    placeholder={i18n('name')}
                    maxLength={maxNameLength}
                />
            </div>
            <div className="form__row">
                <Field
                    name="business"
                    component={Input}
                    placeholder={i18n('business')}
                    normalize={normalizeTextField}
                />
            </div>
            <div className="form__row">
                <Field
                    name="bio"
                    component={Input}
                    placeholder={i18n('bio')}
                    maxLength={maxBioLength}
                    normalize={normalizeMultilineField}
                />
            </div>
            <div className="form__row">
                <Field
                    name="website"
                    component={Input}
                    placeholder={i18n('website')}
                    normalize={normalizeTextField}
                />
            </div>
            <div className="form__row">
                <Field
                    name="address"
                    component={Input}
                    placeholder={i18n('address')}
                    normalize={normalizeTextField}
                />
            </div>
            <div className="form__row form__row--checkboxes">
                <div className="form__checkbox">
                    <Field
                        name="activeStory"
                        component={Checkbox}
                        placeholder={i18n('activeStory')}
                    />
                </div>
                <div className="form__checkbox">
                    <Field
                        name="verifiedAcc"
                        component={Checkbox}
                        placeholder={i18n('verifiedAcc')}
                    />
                </div>
                <div className="form__checkbox">
                    <Field
                        name="showEmail"
                        component={Checkbox}
                        placeholder={i18n('showEmail')}
                    />
                </div>
                <div className="form__checkbox">
                    <Field
                        name="showPhone"
                        component={Checkbox}
                        placeholder={i18n('showPhone')}
                    />
                </div>
            </div>
            <div className="form__row">
                <FieldArray
                    name="posts"
                    component={Files}
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
                    component={Files}
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
