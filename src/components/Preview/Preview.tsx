import React from 'react';
import { LangModel } from '../../models/lang';
import { PreviewModel } from '../../models/preview';
import { fileToUrl } from '../../utils/helpers';

import './photo.jpg';

import './Preview.scss';

export interface PreviewProps {
    lang: LangModel;
    preview: PreviewModel;
}

export const Preview = (props: PreviewProps) => {
    const {
        login,
        photo,
    } = props.preview;

    const photoUrl = photo ? fileToUrl(photo) : './img/photo.jpg';

    return (
        <div className="preview">
            <div className="preview__wrapper">
                <div className="preview__header">
                    <div className="preview__header-text">{login}</div>
                </div>
                <div className="preview__content">
                    <div className="preview__row">
                        <img
                            src={photoUrl}
                            className="preview__photo"
                            alt={login}
                        />
                    </div>
                </div>
            </div>
            <div className="preview__phone" />
        </div>
    );
};
