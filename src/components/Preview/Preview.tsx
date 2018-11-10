import React from 'react';
import { LangModel } from '../../models/lang';
import { PreviewModel } from '../../models/preview';

import './Preview.scss';

export interface PreviewProps {
    lang: LangModel;
    preview: PreviewModel;
}

export const Preview = (props: PreviewProps) => {
    const {
        login,
        photoLink,
    } = props.preview;

    return (
        <div className="preview">
            <div className="preview__wrapper">
                <div className="preview__header">
                    <div className="preview__header-text">{login}</div>
                </div>
                <div className="preview__row">
                    <img
                        alt={login}
                        src={photoLink}
                        className="preview__photo"
                    />
                </div>
            </div>
            <div className="preview__phone" />
        </div>
    );
};
