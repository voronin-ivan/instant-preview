import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../../Input/Input';
import { Upload } from '../../Upload/Upload';
import i18n from '../../../utils/i18n';
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

export const FormMainFields = () => (
    <React.Fragment>
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
    </React.Fragment>
);
