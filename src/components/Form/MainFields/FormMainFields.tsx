import React from 'react';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { Input } from '../../Input/Input';
import { Upload } from '../../Upload/Upload';
import {
    normalizeTextField,
    normalizeNumberField,
    normalizeMultilineField,
} from '../../../utils/normalizer';

const maxLoginLength = 30;
const maxNameLength = 30;
const maxBioLength = 150;
const maxPostsCount = 9999;
const maxFollowingCount = 9999;
const maxFollowersCount = 999999999; // 999M

export const FormMainFields = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <div className="form__row">
                <Field
                    name="login"
                    component={Input}
                    label={t('login')}
                    maxLength={maxLoginLength}
                />
            </div>
            <div className="form__row">
                <Field
                    name="photo"
                    component={Upload}
                    label={t('photo')}
                    showFileName
                    showClearButton
                />
            </div>
            <div className="form__row">
                <Field
                    name="postsCount"
                    component={Input}
                    label={t('postsCount')}
                    normalize={normalizeNumberField(maxPostsCount)}
                />
            </div>
            <div className="form__row">
                <Field
                    name="followersCount"
                    component={Input}
                    label={t('followersCount')}
                    normalize={normalizeNumberField(maxFollowersCount)}
                />
            </div>
            <div className="form__row">
                <Field
                    name="followingCount"
                    component={Input}
                    label={t('followingCount')}
                    normalize={normalizeNumberField(maxFollowingCount)}
                />
            </div>
            <div className="form__row">
                <Field
                    name="name"
                    component={Input}
                    label={t('name')}
                    maxLength={maxNameLength}
                />
            </div>
            <div className="form__row">
                <Field
                    name="business"
                    component={Input}
                    label={t('business')}
                    normalize={normalizeTextField}
                />
            </div>
            <div className="form__row">
                <Field
                    name="bio"
                    component={Input}
                    label={t('bio')}
                    maxLength={maxBioLength}
                    normalize={normalizeMultilineField}
                />
            </div>
            <div className="form__row">
                <Field
                    name="website"
                    component={Input}
                    label={t('website')}
                    normalize={normalizeTextField}
                />
            </div>
            <div className="form__row">
                <Field
                    name="address"
                    component={Input}
                    label={t('address')}
                    normalize={normalizeTextField}
                />
            </div>
        </React.Fragment>
    );
};
